import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from './field-wrapper';

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  rows?: number;
};

export const TextAreaField = ({
  label,
  className,
  registration,
  error,
  required,
  rows = 3,
}: TextAreaFieldProps) => {
  return (
    <FieldWrapper
      label={label}
      error={error}
      required={required}
    >
      <textarea
        className={clsx(
          'text-gray-600 bg-[#fff] border-[#E5E7EB]  appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm',
          className
        )}
        {...registration}
        rows={rows}
      />
    </FieldWrapper>
  );
};
