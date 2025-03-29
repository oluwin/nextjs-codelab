import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useDisclosure } from '@/hooks/use-disclosure';



interface DropdownMenuItemFormDrawerProps {
  render: (props: {
    close: () => void;
    open: () => void;
    isOpen: boolean;
  }) => React.ReactNode;
  triggerButtonTitle?: string;
  triggerButtonIcon?: React.ReactElement;
}

export function DropdownMenuItemFormWizardDrawer({
  render,
  triggerButtonTitle = 'Edit',
  triggerButtonIcon = <PencilSquareIcon fontSize={1} />,
}: DropdownMenuItemFormDrawerProps) {
  const { close, open, isOpen } = useDisclosure();

  // @ts-ignore
  return (
    <>
      <a
        href={'#'}
        className="px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-[#12342A] hover:text-white  cursor-pointer"
        onClick={() => open()}
      >
        {React.cloneElement(triggerButtonIcon, {
          className: 'w-4 h-4 mr-2',
        })}
        <span>{triggerButtonTitle}</span>
      </a>
      {render({
        close,
        open,
        isOpen,
      })}
    </>
  );
}
