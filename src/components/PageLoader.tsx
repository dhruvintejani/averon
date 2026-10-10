import React from 'react';

export const PageLoader: React.FC = () => (
  <div
    className="relative flex min-h-[calc(100dvh-100px)] items-center justify-center overflow-hidden bg-[#071a33] px-4 text-white"
    role="status"
    aria-live="polite"
    aria-label="Loading Averon Freight Solutions"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,162,39,.13),transparent_28%),linear-gradient(180deg,#071a33_0%,#061426_100%)]" />
    <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:38px_38px]" />

    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="relative grid h-24 w-24 place-items-center sm:h-28 sm:w-28">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#d4af37] border-r-[#d4af37]/40 animate-spin motion-reduce:animate-none" />
        <div className="absolute inset-[8px] rounded-full border border-[#c9a227]/25" />

        <img
          src="/SVG%20Final/Hexagon%20AFS%20Logo%20White%20SVG.svg"
          alt=""
          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
        />
      </div>

      <div className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d4af37]">
        Averon Freight Solutions
      </div>
      <p className="mt-2 text-xs font-medium tracking-[0.08em] text-slate-300">
        Preparing your logistics experience
      </p>

      <div className="mt-6 flex items-center gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse motion-reduce:animate-none" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]/65 animate-pulse [animation-delay:160ms] motion-reduce:animate-none" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]/35 animate-pulse [animation-delay:320ms] motion-reduce:animate-none" />
      </div>

      <span className="sr-only">Loading page</span>
    </div>
  </div>
);
