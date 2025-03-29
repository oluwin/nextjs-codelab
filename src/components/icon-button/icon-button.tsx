import clsx from 'clsx'
import * as React from 'react'
import { Spinner } from '../spinner'

export const iconButtonVariants = {
  primary: 'bg-[#c9ffb6] text-green-600',
  neutral: 'bg-neutral-100',
  danger: 'bg-red-100',
  inverse: 'bg-white text-blue-600',
  warning:
    'border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all',
}

const sizes = {
  sm: 'p-1 m-0 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
}

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof iconButtonVariants
  size?: keyof typeof sizes
  isLoading?: boolean
  isButton?: boolean
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'sm',
      isLoading = false,
      isButton = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'rounded-full font-medium hover:opacity-80 bg-[#71ED45] focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
          iconButtonVariants[variant],
          sizes[size],
          className,
          isButton &&
            'flex items-center justify-center rounded-md border border-gray-300 px-2 py-2 font-medium shadow-sm hover:opacity-80 focus:outline-none'
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && <span>{props.children}</span>}
      </button>
    )
  }
)

IconButton.displayName = 'Button'
