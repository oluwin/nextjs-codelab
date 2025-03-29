import React from 'react';
import { NumericFormat } from 'react-number-format';

import { INPUT_FIELD_STYLE } from '@/components/forms/input-field';
import { cn } from '@/lib/utils';
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from './field-wrapper';

type CurrencyFieldProps = FieldWrapperPassThroughProps & {
  name: string;
  className?: string;
  disabled?: boolean;
  onInput?: (e: any) => void;
  value?: any;
};

export const CurrencyField = ({
  name,
  label,
  className,
  disabled = false,
  required = true,
  description,
  value,
  onInput,
}: CurrencyFieldProps) => {
  return (
    <FieldWrapper
      label={label}
      required={required}
      description={description}
    >
      <NumericFormat
        // {...field}
        name={name}
        value={value}
        thousandSeparator={true}
        decimalScale={2}
        fixedDecimalScale={true}
        allowNegative={false}
        className={cn(INPUT_FIELD_STYLE, className)}
        disabled={disabled}
        valueIsNumericString={true}  // Ensure the input is treated as a numeric string
        onValueChange={({ value }) => {
          const numericValue = parseFloat(value || "0");  // Convert value to number or default to 0
          // onChange(numericValue); // Pass the number to the form
          if (onInput) onInput(numericValue); // Optionally call onInput if provided
        }}
      />
    </FieldWrapper>
  );
};

