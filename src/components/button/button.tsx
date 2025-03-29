// interface ButtonProps{
//     label: string
//     bgColor?: string
//     borderRadius?: string
//     onClickButton?: () => void
// }
//
// export function Button({label, bgColor, borderRadius, onClickButton}:ButtonProps){
//     return(
//         <>
//             {/* <button className="rounded-full px-4 py-2 bg-blue-500 text-white">{label}</button> */}
//             <button onClick={onClickButton} className={`px-4 py-2 cursor-pointer ${bgColor} text-white ${borderRadius}`}>{label}</button>
//         </>
//     )
// }

import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '@/components/spinner';

export const variants = {
    primary: 'bg-[#12342A] text-white',
    inverse: 'bg-white',
    secondary: 'bg-[#71ED45] text-[#12342A] border-[#12342A]',
    danger: 'bg-red-600 text-white',
    info: 'bg-[#EDE82A] text-black',
    warning:
        'border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all',
};

export const sizes = {
    xs: 'py-1 px-2 text-sm',
    sm: 'py-3 px-6 text-sm',
    md: 'py-3 px-6 text-md',
    lg: 'py-3 px-8 text-lg',
};

type IconProps =
    | { startIcon: React.ReactElement; endIcon?: never }
    | { endIcon: React.ReactElement; startIcon?: never }
    | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps =
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<
    HTMLButtonElement,
    ButtonProps
>(
    (
        {
            type = 'button',
            className = '',
            variant = 'primary',
            size = 'md',
            isLoading = false,
            startIcon,
            endIcon,
            ...props
        }: ButtonProps,
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                className={clsx(
                    'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-xl shadow-sm font-medium focus:outline-none hover:opacity-80',
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading}
                {...props}
            >
                {isLoading && (
                    <Spinner size="sm" className="text-current" />
                )}
                {!isLoading && startIcon}
                <span className="mx-2">
          {props.children}
        </span>{' '}
                {!isLoading && endIcon}
            </button>
        );
    }
);

Button.displayName = 'Button';