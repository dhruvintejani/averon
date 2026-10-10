import React from 'react';
import { ArrowRight, ClipboardCheck } from 'lucide-react';

interface ProjectCargoPendingPageProps {
  onNavigate: (page: string) => void;
}

export const ProjectCargoPendingPage: React.FC<ProjectCargoPendingPageProps> = ({ onNavigate }) => (
  <div className="bg-white text-[#14263d]">
    <section className="bg-[#071a33] pb-14 pt-16 text-white sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">Service Status</div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">Project Cargo & Breakbulk</h1>
      </div>
    </section>

    <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <div className="border border-amber-200 bg-white p-6 shadow-[0_16px_45px_rgba(7,26,51,.06)] sm:p-8">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#071a33] text-[#d4af37]">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#071a33]">Service confirmation pending</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Project Cargo & Breakbulk is not currently being presented as a confirmed active Averon service. Client confirmation is required before this service is published as an offering.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <button type="button" onClick={() => onNavigate('services')} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#071a33] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
              View Confirmed Services
              <ArrowRight className="h-4 w-4 text-[#d4af37]" />
            </button>
            <button type="button" onClick={() => onNavigate('contact')} className="inline-flex min-h-12 items-center justify-center gap-2 border border-slate-300 px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33]">
              Contact Averon
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);
