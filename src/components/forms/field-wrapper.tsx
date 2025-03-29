import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined | any;
  description?: any | undefined;
  required?: boolean;
  disabled?: boolean;
  showPasswordStrength?: boolean;
  passwordStrength?: string;
  passwordStrengthError?: any[];
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = ({
  label,
  className,
  error,
  children,
  required = true,
  description,
}: FieldWrapperProps) => {
  return (
    <div className='mb-5'>
      <div
        className={clsx(
          'block text-sm font-medium text-gray-700',
          className
        )}
      >
        {label}{' '}
        {required && (
          <span className="text-red-500">*</span>
        )}
        <div className="mt-1">{children}</div>
      </div>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm text-red-500 pt-2"
        >
          {error.message}
        </div>
      )}
      {description && (
        <p
          id="helper-text-explanation"
          className="mt-1 text-lg text-gray-700 dark:text-gray-400 flex"
        >
          {description}
        </p>
      )}
    </div>
  );
};
