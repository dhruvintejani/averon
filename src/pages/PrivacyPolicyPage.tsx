import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => (
  <div className="bg-white text-[#14263d]">
    <section className="bg-[#071a33] pb-14 pt-16 text-white sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">Legal</div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">Privacy Policy</h1>
      </div>
    </section>

    <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <div className="border border-amber-200 bg-white p-6 shadow-[0_16px_45px_rgba(7,26,51,.06)] sm:p-8">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#071a33] text-[#d4af37]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#071a33]">Client-approved legal text is pending</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Averon Freight Solutions LLP has not yet provided approved Privacy Policy text for publication. To avoid inventing legal commitments about data collection, retention, sharing or user rights, this page intentionally does not state those terms yet.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Before production publication, this notice should be replaced with the exact privacy wording approved by the client or their legal adviser.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-600">For privacy-related questions in the meantime:</p>
            <a href="mailto:info@averonfs.com" className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#071a33] hover:text-[#8b6b1f]">
              <Mail className="h-4 w-4" />
              {COMPANY_INFO.emails[0]}
            </a>
          </div>
        </div>

        <button type="button" onClick={() => onNavigate('home')} className="mt-8 text-sm font-bold text-[#071a33] hover:text-[#8b6b1f]">
          Return to Home
        </button>
      </div>
    </section>
  </div>
);
