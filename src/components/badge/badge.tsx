import clsx from 'clsx';
import { ReactNode } from 'react';

export const variants = {
  primary: 'bg-indigo-100 text-indigo-700',
  success: 'bg-green-50 text-green-600',
  warning: 'bg-yellow-50 text-yellow-600',
  danger: 'bg-red-50 text-red-600',
  inverse: 'bg-gray-100 text-gray-600',
  default: 'bg-blue-100 text-blue-700',
};

const sizes = {
  sm: 'py-1 px-2 text-[10px]',
  md: 'py-1 px-2 text-md',
  lg: 'py-1 px-2 text-lg',
};

export interface BadgeProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}

export const Badge = ({
  children,
  variant = 'success',
  size = 'sm',
  className='',
}: BadgeProps) => {
  return (
    <div className="whitespace-nowrap">
      <span
        className={clsx(
          'rounded-full font-semibold text-sm',
          variants[variant],
          sizes[size],
          className,
        )}
      >
        {children}
      </span>
    </div>
  );
};
