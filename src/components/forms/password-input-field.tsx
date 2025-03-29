'use client'
import clsx from "clsx";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { FieldWrapperPassThroughProps } from "./field-wrapper";
import { PasswordFieldWrapper } from "./password-field-wrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password" | "date" | "number";
  className?: string;
  disabled?: boolean;
  value?: string | number;
  showPasswordStrength?: boolean;
  onInput: (data: any) => void
};

export const PasswordInputField = ({
  type = "text",
  label,
  className,
  disabled = false,
  required = true,
  value,
  onInput,
  showPasswordStrength = false,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [passwordStrengthError, setPasswordStrengthError] = useState<any[]>([]);

  const calculatePasswordStrength = (
    password: string
  ): { strength: string; errors: string[] } => {
    const isLengthValid = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const errors: string[] = [];

    if (!isLengthValid) {
      errors.push("Must include at least 8 characters.");
    }

    if (!(hasUppercase && hasLowercase)) {
      errors.push("Must include at least one uppercase or lowercase letter.");
    }

    if (!hasNumber) {
      errors.push("Must include at least one number.");
    }

    if (!hasSpecialChar) {
      errors.push("Include a special character for better security.");
    }

    let strength: string;

    if (errors.length === 0) {
      strength = "strong";
    } else if (errors.length <= 2) {
      strength = "medium";
    } else {
      strength = "weak";
    }

    return { strength, errors };
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    if (showPasswordStrength) {
      const { strength, errors } = calculatePasswordStrength(newPassword);
      setPasswordStrength(strength);
      setPasswordStrengthError(errors);
    }
  };

  if (type === "password") {
    return (
      <PasswordFieldWrapper
        label={label}
        required={required}
        showPasswordStrength={showPasswordStrength}
        passwordStrength={passwordStrength}
        passwordStrengthError={passwordStrengthError}
      >
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className={clsx(
              "block w-full rounded-md border-0 px-3 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#71ED45] sm:text-sm sm:leading-6",
              disabled && "opacity-60",
              passwordStrength === "weak" &&
                "border-red-500 focus:border-0 focus:outline-none focus:ring-red-500",
              passwordStrength === "medium" &&
                "border-yellow-500 focus:border-0 focus:ring-yellow-500",
              passwordStrength === "strong" &&
                "border-green focus:ring-green focus:border-0",
              className
            )}
            disabled={disabled}
            value={value}
            onChange={(e) => {
              handlePasswordChange(e);
            }}
            onInput={onInput}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 mb-4 flex cursor-pointer items-center pr-2"
            onClick={() => setShowPassword(!showPassword)}
            style={{ marginTop: "1.2rem" }}
          >
            {showPassword ? (
              <EyeIcon className="h-6 w-6 text-gray-500" />
            ) : (
              <EyeOffIcon className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>
      </PasswordFieldWrapper>
    );
  }
};
