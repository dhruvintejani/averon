import React from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  BriefcaseBusiness,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Link2,
  Mail,
  RefreshCw,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface TermsConditionsPageProps {
  onNavigate: (page: string) => void;
}

type Section = {
  title: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    title: '1. Acceptance of These Terms',
    icon: FileCheck2,
    paragraphs: [
      'By accessing or using this website, you agree to use it in accordance with these Terms & Conditions and applicable law. If you do not agree with these terms, you should not use the website.',
    ],
  },
  {
    title: '2. Website Purpose',
    icon: Globe2,
    paragraphs: [
      'This website provides general information about Averon Freight Solutions LLP and its freight-forwarding and logistics support. Website content is intended for general business information and enquiry purposes.',
      'Information shown on the website should not be treated as a binding quotation, booking confirmation, transit-time guarantee, customs ruling, insurance advice, legal advice or contractual commitment unless separately confirmed by Averon in writing.',
    ],
  },
  {
    title: '3. Enquiries, Quotations and Bookings',
    icon: BriefcaseBusiness,
    paragraphs: [
      'Submitting an enquiry or requesting a quote through the website does not by itself create a contract or confirm a shipment booking. A service engagement becomes subject to the written quotation, booking confirmation, commercial terms and other documents accepted between the relevant parties.',
    ],
    bullets: [
      'Rates, schedules, routing, availability and transit times may change before booking confirmation.',
      'Additional charges may apply where shipment details differ from the information originally provided.',
      'Averon may request supporting documents or additional cargo information before confirming a service.',
      'Services may depend on third-party carrier, terminal, customs, transport, warehouse or partner availability.',
    ],
  },
  {
    title: '4. Customer Responsibilities',
    icon: UserRoundCheck,
    paragraphs: [
      'Customers and website users are responsible for providing complete, accurate and lawful information relevant to their enquiry or shipment.',
    ],
    bullets: [
      'Accurate cargo description, weight, dimensions, value and quantity where required.',
      'Correct origin, destination, consignee, shipper and contact information.',
      'Required permits, licences, declarations, approvals and supporting documents where applicable.',
      'Disclosure of dangerous, restricted, high-value, temperature-sensitive or otherwise special cargo requirements before booking.',
      'Compliance with applicable import, export, customs, sanctions and trade requirements relevant to the shipment.',
    ],
  },
  {
    title: '5. Third-Party Logistics Providers',
    icon: Handshake,
    paragraphs: [
      'International logistics commonly involves third-party carriers, airlines, shipping lines, transporters, terminals, customs-related parties, warehouses and overseas partners. Services performed by third parties may also be subject to their own operating conditions, schedules, exclusions and limitations.',
      'Where Averon coordinates third-party services, delays or changes may occur because of factors outside Averon’s direct control.',
    ],
  },
  {
    title: '6. Shipment Information and Transit Times',
    icon: AlertTriangle,
    paragraphs: [
      'Any schedules, estimated transit times, shipment-status information or route information communicated through the website or during an enquiry should be treated as indicative unless expressly guaranteed in a separate written agreement.',
      'Operational conditions may be affected by carrier schedules, weather, port congestion, customs procedures, inspections, documentation issues, public holidays, strikes, regulatory action, force majeure events or other circumstances outside reasonable control.',
    ],
  },
  {
    title: '7. Intellectual Property',
    icon: ShieldCheck,
    paragraphs: [
      'Unless otherwise stated, the Averon name, logo, website design, written content and original website materials are owned by or used with permission by Averon Freight Solutions LLP. They may not be copied, reproduced, republished or used for misleading commercial purposes without appropriate permission.',
      'Third-party trademarks, photographs or other materials remain the property of their respective owners where applicable.',
    ],
  },
  {
    title: '8. Acceptable Website Use',
    icon: FileText,
    paragraphs: [
      'You must not misuse the website, attempt unauthorized access, interfere with website operation, submit malicious code, impersonate another person, send unlawful content, or use the website in a way that infringes the rights of Averon or any third party.',
    ],
  },
  {
    title: '9. External Links',
    icon: Link2,
    paragraphs: [
      'The website may contain links to third-party websites or services. These links are provided for convenience. Averon does not control external websites and is not responsible for their availability, content, security, products, services or policies.',
    ],
  },
  {
    title: '10. Disclaimer and Limitation',
    icon: Scale,
    paragraphs: [
      'Averon aims to keep website information accurate and current, but the website is provided on a general informational basis and may contain errors, omissions or outdated information.',
      'To the extent permitted by applicable law, Averon is not responsible for loss arising solely from reliance on general website content where the relevant service, rate, routing, booking or operational information has not been separately confirmed in writing.',
      'Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or limited.',
    ],
  },
  {
    title: '11. Governing Law',
    icon: Scale,
    paragraphs: [
      'These website Terms & Conditions are intended to be interpreted in accordance with the applicable laws of India. Any jurisdiction-specific wording, dispute-resolution process or contractual forum should be confirmed in Averon’s final client-approved legal terms.',
    ],
  },
  {
    title: '12. Changes to These Terms',
    icon: RefreshCw,
    paragraphs: [
      'Averon may update these website Terms & Conditions when the website, services, business processes or legal requirements change. The latest version will be published on this page with an updated effective date.',
    ],
  },
];

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onNavigate }) => (
  <div className="bg-white text-[#14263d]">
    <section className="relative overflow-hidden bg-[#071a33] pb-14 pt-16 text-white sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full border border-[#c9a227]/20" />
      <div className="absolute right-4 top-8 h-40 w-40 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-300 transition hover:text-[#d4af37]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>

        <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
          Website Terms
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-5 max-w-[760px] text-sm leading-7 text-slate-300 sm:text-base">
          These terms govern use of the Averon Freight Solutions LLP website and explain the general basis on which website information, enquiries and quotation requests are handled.
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Effective date: 10 October 2026
        </p>
      </div>
    </section>

    <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
        <div className="space-y-5">
          <div className="border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(7,26,51,.05)] sm:p-8">
            <h2 className="text-xl font-extrabold text-[#071a33]">Important distinction</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              These Terms & Conditions apply to the website itself. Individual freight, customs, transport, warehousing or logistics services may be governed by separate quotations, booking confirmations, carrier conditions, service agreements or other documents. Where a specific written agreement applies, that agreement should govern the relevant service to the extent of any inconsistency.
            </p>
          </div>

          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section
                key={section.title}
                className="border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(7,26,51,.035)] sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#071a33] text-[#d4af37]">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-extrabold text-[#071a33] sm:text-xl">
                      {section.title}
                    </h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-700">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a227]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <aside className="h-fit border border-slate-200 bg-[#071a33] p-6 text-white shadow-[0_18px_45px_rgba(7,26,51,.12)] lg:sticky lg:top-28">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227] text-[#d4af37]">
            <FileText className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-lg font-extrabold">Questions About These Terms?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Contact Averon Freight Solutions LLP for questions about website use, enquiries or the applicable terms for a proposed service.
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <a
              href={`mailto:${COMPANY_INFO.emails[0]}`}
              className="inline-flex items-center gap-2 break-all text-sm font-bold text-white transition hover:text-[#d4af37]"
            >
              <Mail className="h-4 w-4 shrink-0 text-[#d4af37]" />
              {COMPANY_INFO.emails[0]}
            </a>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              {COMPANY_INFO.address}
            </p>
          </div>
        </aside>
      </div>
    </section>
  </div>
);
