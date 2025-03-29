'use client'
import clsx from 'clsx'
import ReactDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper'

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string
  name?: any
  placeholder?: string
  dateFormat?: string
  minDate?: Date
  maxDate?: Date
  selected?: Date | null
  value?: Date | null
  onChange?: (e: any) => void
}

export const DatePickerField = ({
  label,
  className,
  name,
  minDate = new Date(1970, 0, 1),
  maxDate = new Date(2050, 0, 1),
  selected,
  error,
  placeholder = 'DD/MM/YYYY',
  dateFormat = 'dd/MM/yyyy',
  required = true,
  disabled = false,
  value,
  onChange,
}: TextAreaFieldProps) => {
  return (
    <FieldWrapper label={label} error={error} required={required}>
      <ReactDatePicker
        name={name}
        disabled={disabled}
        dateFormat={dateFormat}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        // onBlur={onBlur}
        selected={selected || value}
        // value={value}
        placeholderText={placeholder}
        showYearDropdown
        scrollableYearDropdown
        showMonthDropdown
        closeOnScroll={() => {
          return false
        }}
        className={clsx(
          'relative appearance-none rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-4 text-gray-600 placeholder-gray-400 shadow-none focus:border-gray-200 focus:outline-none focus:ring-gray-200 sm:text-sm',
          className,
          disabled && 'opacity-80'
        )}
      />
    </FieldWrapper>
  )
}
