import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldErrorProps {
  id?: string;
  message?: string;
}

export const FormFieldError: React.FC<FormFieldErrorProps> = ({ id, message }) => {
  if (!message) return null;

  return (
    <div
      id={id}
      role="alert"
      className="mt-1.5 flex items-start gap-1.5 text-[11px] font-semibold leading-4 text-rose-600"
    >
      <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" />
      <span>{message}</span>
    </div>
  );
};
