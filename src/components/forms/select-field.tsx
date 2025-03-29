import clsx from 'clsx';
import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from './field-wrapper';

type Option = {
  label: React.ReactNode;
  value: string | number;
};

export type SelectFieldProps =
  FieldWrapperPassThroughProps & {
    defaultOption?: Option;
    options: Option[];
    className?: string;
    defaultValue?: any;
    placeholder?: string;
    registration?: Partial<UseFormRegisterReturn>;
    disabled?: boolean;
    required?: boolean;
  };

export function SelectField({
  label,
  options,
  error,
  className,
  defaultValue,
  registration,
  placeholder,
  defaultOption,
  disabled = false,
  required = true,
}: SelectFieldProps) {
  if (!options) return null;

  return (
    <FieldWrapper
      label={label}
      error={error}
      required={required}
    >
      <select
        title={placeholder}
        name="location"
        className={clsx(
          'bg-[#F9FAFB] border border-[#E5E7EB] mt-1 block w-full pl-3 pr-10 py-4 text-base focus:outline-none focus:ring-gray-200 focus:border-gray-200 sm:text-sm custom-scrollbar rounded-md',
          className,
          disabled && 'opacity-60'
        )}
        defaultValue={defaultValue}
        disabled={disabled}
        {...registration}
      >
        {defaultOption && (
          <option value={defaultOption.value}>
            {defaultOption.label}
          </option>
        )}
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
