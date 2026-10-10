import type { IncomingMessage, ServerResponse } from 'node:http';

type ApiRequest = IncomingMessage & { body?: unknown };
type EnquiryType = 'contact' | 'quote';

interface EnquiryPayload {
  enquiryType: EnquiryType;
  fullName: string;
  companyName: string;
  email: string;
  countryCode: string;
  phone: string;
  origin: string;
  destination: string;
  mode: string;
  type: string;
  incoterm: string;
  cargoDetails: string;
  message: string;
  website: string;
}

interface JsonResponse {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
}

const MAX_BODY_BYTES = 20_000;
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

const ALLOWED_MODES = new Set([
  'Ocean',
  'Air',
  'Road',
  'Ocean Freight',
  'Air Freight',
  'Road Freight',
  'Customs Clearance Only',
]);
const ALLOWED_TYPES = new Set(['FCL', 'LCL', 'Air Cargo', 'Project Cargo', 'Other']);
const ALLOWED_INCOTERMS = new Set(['EXW', 'FOB', 'CIF', 'DDP', 'DAP', 'Other']);

class RequestError extends Error {
  status: number;
  errors?: Record<string, string>;

  constructor(status: number, message: string, errors?: Record<string, string>) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

const respond = (res: ServerResponse, status: number, payload: JsonResponse) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
};

const singleLine = (value: unknown, max: number, label: string) => {
  if (typeof value !== 'string') throw new RequestError(400, `${label} must be text.`);
  const normalized = value
    .replace(/[\u0000-\u001F\u007F]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (normalized.length > max) throw new RequestError(400, `${label} is too long.`);
  return normalized;
};

const multiLine = (value: unknown, max: number, label: string) => {
  if (typeof value !== 'string') throw new RequestError(400, `${label} must be text.`);
  const normalized = value.replace(/\u0000/g, '').replace(/\r\n?/g, '\n').trim();

  if (normalized.length > max) throw new RequestError(400, `${label} is too long.`);
  return normalized;
};

const validEmail = (value: string) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validPhone = (value: string) => {
  const digits = value.replace(/[^0-9]/g, '');
  return digits.length >= 6 && digits.length <= 15;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const readBody = async (req: ApiRequest) => {
  const contentLength = Number(req.headers['content-length'] ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    throw new RequestError(413, 'Request is too large.');
  }

  if (req.body !== undefined) {
    const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

    if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
      throw new RequestError(413, 'Request is too large.');
    }

    if (typeof req.body !== 'string') return req.body;

    try {
      return JSON.parse(req.body) as unknown;
    } catch {
      throw new RequestError(400, 'Invalid JSON request.');
    }
  }

  const chunks: Buffer[] = [];
  let total = 0;

  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    total += buffer.length;
    if (total > MAX_BODY_BYTES) throw new RequestError(413, 'Request is too large.');
    chunks.push(buffer);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8')) as unknown;
  } catch {
    throw new RequestError(400, 'Invalid JSON request.');
  }
};

const validate = (raw: unknown): EnquiryPayload => {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new RequestError(400, 'Invalid enquiry request.');
  }

  const body = raw as Record<string, unknown>;
  const enquiryType = singleLine(body.enquiryType, 20, 'Enquiry type');
  const fullName = singleLine(body.fullName, 100, 'Full name');
  const companyName = singleLine(body.companyName, 120, 'Company name');
  const email = singleLine(body.email, 254, 'Email').toLowerCase();
  const countryCode = singleLine(body.countryCode, 5, 'Country code');
  const phone = singleLine(body.phone, 32, 'Phone');
  const origin = singleLine(body.origin, 120, 'Origin');
  const destination = singleLine(body.destination, 120, 'Destination');
  const mode = singleLine(body.mode, 60, 'Shipment mode');
  const type = singleLine(body.type, 60, 'Shipment type');
  const incoterm = singleLine(body.incoterm, 30, 'Incoterm');
  const cargoDetails = multiLine(body.cargoDetails ?? '', 2500, 'Cargo details');
  const message = multiLine(body.message ?? '', 2500, 'Message');
  const website = singleLine(body.website ?? '', 200, 'Website');

  const errors: Record<string, string> = {};

  if (enquiryType !== 'contact' && enquiryType !== 'quote') errors.enquiryType = 'Invalid enquiry type.';
  if (!fullName) errors.fullName = 'Full name is required.';
  if (!companyName) errors.companyName = 'Company name is required.';
  if (!email) errors.email = 'Email is required.';
  else if (!validEmail(email)) errors.email = 'Enter a valid email address.';
  if (!/^\+[0-9]{1,4}$/.test(countryCode)) errors.countryCode = 'Enter a valid country calling code.';
  if (!phone) errors.phone = 'Phone or WhatsApp number is required.';
  else if (!validPhone(phone)) errors.phone = 'Enter a valid phone or WhatsApp number.';
  if (!origin) errors.origin = 'Shipment origin is required.';
  if (!destination) errors.destination = 'Shipment destination is required.';
  if (!ALLOWED_MODES.has(mode)) errors.mode = 'Invalid shipment mode.';
  if (!ALLOWED_TYPES.has(type)) errors.type = 'Invalid shipment type.';
  if (!ALLOWED_INCOTERMS.has(incoterm)) errors.incoterm = 'Invalid Incoterm.';

  if (Object.keys(errors).length) {
    throw new RequestError(400, 'Please check the submitted details.', errors);
  }

  return {
    enquiryType: enquiryType as EnquiryType,
    fullName,
    companyName,
    email,
    countryCode,
    phone,
    origin,
    destination,
    mode,
    type,
    incoterm,
    cargoDetails,
    message,
    website,
  };
};

const buildMessage = (data: EnquiryPayload) => {
  const label = data.enquiryType === 'quote' ? 'Freight Quote Request' : 'Website Shipment Enquiry';
  const phone = `${data.countryCode} ${data.phone}`.trim();
  const subject = `${label} — ${data.companyName.replace(/[\r\n]+/g, ' ').trim()}`;

  const rows = [
    ['Full Name', data.fullName],
    ['Company Name', data.companyName],
    ['Email', data.email],
    ['Phone / WhatsApp', phone],
    ['Origin - POL', data.origin],
    ['Destination - POD', data.destination],
    ['Shipment Mode', data.mode],
    ['Shipment Type', data.type],
    ['Incoterm', data.incoterm],
    ['Cargo Details', data.cargoDetails || '-'],
    ['Message', data.message || '-'],
  ] as const;

  const htmlRows = rows
    .map(([key, value]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#071a33;vertical-align:top;">${escapeHtml(key)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#334155;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`)
    .join('');

  return {
    subject,
    htmlContent: `<div style="font-family:Arial,sans-serif;color:#14263d;line-height:1.5;"><h2 style="margin:0 0 16px;color:#071a33;">${escapeHtml(label)}</h2><p style="margin:0 0 18px;color:#475569;">A new enquiry was submitted through the Averon Freight Solutions website.</p><table role="presentation" style="width:100%;max-width:720px;border-collapse:collapse;border:1px solid #e5e7eb;">${htmlRows}</table></div>`,
    textContent: [label, '', 'A new enquiry was submitted through the Averon Freight Solutions website.', '', ...rows.map(([key, value]) => `${key}: ${value}`)].join('\n'),
  };
};

export default async function handler(req: ApiRequest, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    respond(res, 405, { ok: false, message: 'Method not allowed.' });
    return;
  }

  const contentType = String(req.headers['content-type'] ?? '')
    .split(';')[0]
    .trim()
    .toLowerCase();

  if (contentType !== 'application/json') {
    respond(res, 415, { ok: false, message: 'Content-Type must be application/json.' });
    return;
  }

  try {
    const data = validate(await readBody(req));

    // Honeypot: silently accept bot submissions without delivering mail.
    if (data.website) {
      respond(res, 200, { ok: true, message: 'Thank you. Your enquiry has been received.' });
      return;
    }

    const apiKey = process.env.BREVO_API_KEY?.trim();
    const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
    const recipientEmail = process.env.ENQUIRY_TO_EMAIL?.trim();

    if (!apiKey || !senderEmail || !recipientEmail || !validEmail(senderEmail) || !validEmail(recipientEmail)) {
      console.error('Enquiry email service is not configured correctly.');
      respond(res, 503, {
        ok: false,
        message: 'Email delivery is temporarily unavailable. Please contact Averon Freight Solutions directly by phone or email.',
      });
      return;
    }

    const email = buildMessage(data);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    let upstream: Response;

    try {
      upstream = await fetch(BREVO_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          sender: { name: 'Averon Freight Solutions LLP', email: senderEmail },
          to: [{ name: 'Averon Freight Solutions LLP', email: recipientEmail }],
          replyTo: {
            name: data.fullName.replace(/[\r\n]+/g, ' ').trim(),
            email: data.email,
          },
          subject: email.subject,
          htmlContent: email.htmlContent,
          textContent: email.textContent,
        }),
        signal: controller.signal,
      });
    } catch {
      console.error('Brevo enquiry delivery request failed.');
      respond(res, 502, {
        ok: false,
        message: 'We could not send your enquiry right now. Please try again shortly or contact Averon directly.',
      });
      return;
    } finally {
      clearTimeout(timeout);
    }

    if (!upstream.ok) {
      console.error('Brevo enquiry delivery failed.', { status: upstream.status });
      respond(res, 502, {
        ok: false,
        message: 'We could not send your enquiry right now. Please try again shortly or contact Averon directly.',
      });
      return;
    }

    respond(res, 200, {
      ok: true,
      message: 'Thank you. Your enquiry has been sent to Averon Freight Solutions.',
    });
  } catch (error) {
    if (error instanceof RequestError) {
      respond(res, error.status, {
        ok: false,
        message: error.message,
        ...(error.errors ? { errors: error.errors } : {}),
      });
      return;
    }

    console.error('Unexpected enquiry API error.');
    respond(res, 500, {
      ok: false,
      message: 'We could not process your enquiry right now. Please try again shortly or contact Averon directly.',
    });
  }
}
