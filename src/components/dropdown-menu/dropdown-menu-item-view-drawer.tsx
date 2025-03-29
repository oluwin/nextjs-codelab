import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';

import { DrawerProps } from '@/components/drawer';
import { ViewDrawer } from '@/components/view-drawer';

interface DropdownMenuItemViewDrawerProps {
  title: string;
  children: React.ReactNode;
  triggerButtonTitle?: string;
  size?: DrawerProps['size'];
  type?: any
}

export function DropdownMenuItemViewDrawer({
  children,
  title,
  triggerButtonTitle = 'View',
  size = 'lg',
  // type
}: DropdownMenuItemViewDrawerProps) {
  // const { data: user } = useUser()
  return (
    <>
      <ViewDrawer
        triggerButton={
          <div className="px-4 py-2 text-sm text-gray-700 flex items-center hover:bg-[#12342A] hover:text-white cursor-pointer">
            <EyeIcon className={'w-4 h-4 mr-2'} />
            <span>{triggerButtonTitle}</span>
          </div>
        }
        title={title}
        size={size}
        // actionButtons={
        //   user?.account?.type === "ADMIN" && type !== 'view-company' ? 
        //     <ViewDrawerFooterButtons investigation={investigation} impact={impact} /> : 
        //     <></>
            
        // }
      >
        {children}
      </ViewDrawer>
    </>
  );
}
