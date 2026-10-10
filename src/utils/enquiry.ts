export type EnquiryType = 'contact' | 'quote';

export interface EnquiryRequest {
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

interface EnquiryApiResponse {
  ok?: boolean;
  message?: string;
}

const FALLBACK_ERROR =
  'We could not send your enquiry right now. Please try again shortly or contact Averon directly.';

export const sendEnquiry = async (payload: EnquiryRequest) => {
  let response: Response;

  try {
    response = await fetch('/api/send-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(FALLBACK_ERROR);
  }

  let data: EnquiryApiResponse = {};

  try {
    data = (await response.json()) as EnquiryApiResponse;
  } catch {
    // Keep the user-facing error generic when the API response is not JSON.
  }

  if (!response.ok || !data.ok) {
    throw new Error(data.message || FALLBACK_ERROR);
  }

  return {
    message:
      data.message ||
      'Thank you. Your enquiry has been sent to Averon Freight Solutions.',
  };
};
