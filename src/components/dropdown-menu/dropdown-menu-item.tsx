import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface DropdownMenuItemProps {
  title?: string;
  link?: string;
  onClick?: () => void;
  icon?: React.ReactElement;
  children?: React.ReactNode;
  query?: string;
}

export function DropdownMenuItem({
  title,
  onClick,
  link,
  icon,
  children,
  // query,
}: DropdownMenuItemProps) {
  return (
    <div>
      {children ? (
        children
      ) : link ? (
        <Link
          href={link}
          className={clsx(
            'px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-[#12342A] hover:text-white'
          )}
        >
          {icon &&
            React.cloneElement(icon, {
              className: 'w-4 h-4 mr-2',
            })}
          <span>{title}</span>
        </Link>
      ) : (
        <a
          href="#"
          className={clsx(
            ' px-4 py-2 text-sm flex hover:bg-[#12342A] hover:text-white'
          )}
          onClick={onClick}
        >
          {icon &&
            React.cloneElement(icon, {
              className: 'w-4 h-4 mr-2',
            })}
          <span>{title}</span>
        </a>
      )}
    </div>
  );
}

export function DropdownMenuItemButton({
  title,
  icon,
  onClick,
}: DropdownMenuItemProps) {
  return (
    <a
      className={clsx(
        'px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-[#12342A] hover:text-white cursor-pointer'
      )}
      href={'#'}
      onClick={onClick}
    >
      {icon &&
        React.cloneElement(icon, {
          className: 'w-4 h-4 mr-2',
        })}
      <span>{title}</span>
    </a>
  );
}
