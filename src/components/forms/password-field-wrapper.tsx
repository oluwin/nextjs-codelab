import clsx from 'clsx'
import * as React from 'react'
import { FieldError } from 'react-hook-form'

// import { PasswordStrengthProgressBar } from './password-strength-progress'

type PasswordFieldWrapperProps = {
  label?: string
  className?: string
  children: React.ReactNode
  error?: FieldError | undefined | any
  description?: string
  required?: boolean
  disabled?: boolean
  showPasswordStrength?: boolean
  passwordStrength?: string
  passwordStrengthError?: any[]
}

export type PasswordFieldWrapperPassThroughProps = Omit<
  PasswordFieldWrapperProps,
  'className' | 'children'
>

export const PasswordFieldWrapper = ({
  label,
  className,
  error,
  children,
  required = true,
  showPasswordStrength = false,
  passwordStrength = '',
  passwordStrengthError = [],
}: PasswordFieldWrapperProps) => {
  const getPasswordStrengthColor = () => {
    if (passwordStrength === 'weak') {
      return 'text-red-500'
    } else if (passwordStrength === 'medium') {
      return 'text-yellow-500'
    } else if (passwordStrength === 'strong') {
      return 'text-green'
    } else {
      return 'text-gray-500'
    }
  }

  return (
    <div>
      <div
        className={clsx('block text-sm font-medium text-gray-700', className)}
      >
        {label} {required && <span className="text-red-500">*</span>}
        <div className="mt-1">{children}</div>
      </div>
      {showPasswordStrength && (
        <>
          {/* {passwordStrength && (
            <PasswordStrengthProgressBar strength={passwordStrength} />
          )} */}
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div></div>
            </div>
            <div className={clsx(getPasswordStrengthColor())}>
              {passwordStrength && (
                <div
                  className={clsx(
                    'flex items-center space-x-1 text-sm font-semibold',
                    error?.message && 'text-red-500'
                  )}
                >
                  <p>Password Strength:</p>
                  <p>{passwordStrength}</p>
                </div>
              )}
              {passwordStrengthError && passwordStrengthError.length > 0 && (
                <div className="pt-2 text-sm font-semibold">
                  {passwordStrengthError.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="pt-2 text-sm text-red-500"
        >
          {error.message}
        </div>
      )}
    </div>
  )
}
