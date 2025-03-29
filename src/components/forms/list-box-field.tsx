import {
  ListBox,
  ListBoxOption,
} from '@/components/forms/list-box';

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from './field-wrapper';

export type ListBoxFieldProps =
  FieldWrapperPassThroughProps & {
    className?: string;
    name?: any;
    options: ListBoxOption[];
    handleOnChange?: (value: any) => void;
    value?: any;
    disabled?: boolean;
    description?: string;
  };

export const ListBoxField = ({
  label,
  required = true,
  // name,
  options,
  disabled,
  description,
  value,
  handleOnChange,
}: ListBoxFieldProps) => {
  return (
    <FieldWrapper
      label={label}
      required={required}
      // error={error}
      description={description}
    >
      <>
        <ListBox
          onChange={(value) => {
            // onChange(value);
            if (handleOnChange) {
              handleOnChange(value);
            }
          }}
          value={value}
          options={options}
          disabled={disabled}
        />
      </>
    </FieldWrapper>
  );
};
