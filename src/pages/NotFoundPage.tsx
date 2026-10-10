import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => (
  <div className="bg-[#f8f6f0] py-24 text-[#14263d] sm:py-32">
    <div className="mx-auto max-w-[760px] px-4 text-center sm:px-6">
      <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#8b6b1f]">404</div>
      <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] text-[#071a33] sm:text-5xl">Page Not Found</h1>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600">
        The page you requested does not exist or may have moved.
      </p>
      <button type="button" onClick={() => onNavigate('home')} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33]">
        Return Home
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);
