import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

const WhatsAppMark = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="h-5 w-5 fill-current sm:h-5.5 sm:w-5.5"
  >
    <path d="M16.04 3C8.91 3 3.11 8.71 3.11 15.73c0 2.24.59 4.43 1.7 6.36L3 28.67l6.78-1.76a13.1 13.1 0 0 0 6.25 1.58h.01c7.12 0 12.93-5.72 12.93-12.75C28.97 8.71 23.16 3 16.04 3Zm0 23.34h-.01a10.95 10.95 0 0 1-5.58-1.51l-.4-.24-4.02 1.04 1.07-3.87-.26-.4a10.46 10.46 0 0 1-1.61-5.63c0-5.84 4.85-10.59 10.81-10.59 5.95 0 10.8 4.75 10.8 10.59 0 5.84-4.85 10.61-10.8 10.61Zm5.93-7.94c-.32-.16-1.92-.93-2.22-1.04-.3-.11-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.25-.19.22-.38.24-.7.08-.33-.16-1.38-.5-2.62-1.58-.97-.85-1.62-1.9-1.81-2.22-.19-.32-.02-.49.14-.65.15-.14.33-.38.49-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.75-1.01-2.4-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.1-1.14 2.68 0 1.58 1.17 3.11 1.33 3.33.16.22 2.29 3.44 5.55 4.82.78.33 1.38.53 1.85.68.78.24 1.49.21 2.05.13.63-.09 1.92-.77 2.19-1.52.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const number = COMPANY_INFO.phones[0].replace(/\D/g, '');
  const message = encodeURIComponent(
    'Hello Averon Freight Solutions, I would like to discuss a shipment requirement.'
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Averon Freight Solutions on WhatsApp"
      title="Chat with Averon on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-3.5 text-sm font-bold text-white shadow-[0_12px_34px_rgba(7,26,51,.28)] ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1fbd59] hover:shadow-[0_16px_38px_rgba(7,26,51,.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:px-4"
    >
      <WhatsAppMark />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};
