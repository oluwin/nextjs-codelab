'use client'
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react'

interface InputProps {
  type?: string
  label?: string
  placeholder?: string
  className?: any
  name: string
  value?: any
  onChange?: any
  error?: any
}

export default forwardRef(function Input(
  {
    label,
    type = 'text',
    placeholder,
    className,
    name,
    value,
    onChange,
    error,
  }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const innerRef = useRef<any>(null)
  useImperativeHandle(ref, () => innerRef.current as HTMLInputElement)
  return (
    <div className="mt-3 w-full">
      <label
        htmlFor="hs-validation-name-error"
        className="my-1 block text-sm font-bold  text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          ref={innerRef}
          placeholder={placeholder}
          className={`${className} block w-full rounded-md border-[1px] bg-gray-100 px-4 py-3 text-sm text-gray-600`}
          value={value}
          onChange={onChange}
          aria-describedby="hs-validation-name-error-helper"
        />
      </div>
      {Boolean(error) && (
        <p className="error error mt-2 text-sm text-red-600">
          {error?.message}
        </p>
      )}
    </div>
  )
})
