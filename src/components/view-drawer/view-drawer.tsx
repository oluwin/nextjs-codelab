import * as React from 'react';


import {
  Drawer,
  DrawerProps,
} from '@/components/drawer';
import { useDisclosure } from '@/hooks/use-disclosure';
import {Button} from "@/components/ui/button";

type FormDrawerProps = {
  triggerButton: React.ReactElement;
  title: string;
  children: React.ReactNode;
  size?: DrawerProps['size'];
  actionButtons?: React.ReactElement;
};

export const ViewDrawer = ({
  title,
  children,
  triggerButton,
  size = 'md',
  actionButtons,
}: FormDrawerProps) => {
  const { close, open, isOpen } = useDisclosure();
  return (
    <>
      {React.cloneElement(triggerButton, {
        onClick: open,
      })}
      <Drawer
        isOpen={isOpen}
        onClose={close}
        title={title}
        size={size}
        renderFooter={() => (
          <div className='flex justify-between'>
            <div>
              <Button
                className="m-5"
                // variant="inverse"
                variant="outline"
                size="sm"
                onClick={close}
              >
                Cancel
              </Button>
            </div>
            {actionButtons}                        
          </div>
        )}
      >
        {children}
      </Drawer>
    </>
  );
};
