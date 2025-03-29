import clsx from "clsx";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password" | "date" | "number";
  className?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  error?: string; // Add error prop
};

export const INPUT_FIELD_STYLE =
    "block w-full rounded-md border-0 px-3 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#71ED45] sm:text-sm sm:leading-6";

export const InputField = ({
                             type = "text",
                             label,
                             className,
                             disabled = false,
                             required = true,
                             value,
                             description,
                             onChange,
                             name,
                             error, // Destructure error prop
                           }: InputFieldProps) => {
  return (
      <FieldWrapper
          label={label}
          required={required}
          description={description}
          error={error} // Pass error prop to FieldWrapper
      >
        <input
            type={type}
            className={clsx(
                INPUT_FIELD_STYLE,
                className,
                disabled && "opacity-60",
                error && "ring-red-500 focus:ring-red-500" // Add red border for errors
            )}
            disabled={disabled}
            value={value}
            onChange={onChange}
            name={name}
        />
      </FieldWrapper>
  );
};