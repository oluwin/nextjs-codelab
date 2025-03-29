import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerProps,
} from '@/components/drawer';
// import { useDocumentStore } from '@/features/documents';
// import { useDisclosure } from '@/hooks/use-disclosure';

type FormDrawerProps = {
  isDone?: boolean;
  triggerButton: React.ReactElement;
  submitButton?: React.ReactElement;
  title: string;
  children: React.ReactNode;
  size?: DrawerProps['size'];
  isOpen?: any;
  open?: any;
  close?: any;
};

export const FormDrawer: React.FC<FormDrawerProps> = ({
  title,
  children,
  isDone,
  triggerButton,
  submitButton,
  size = 'md',
  isOpen,
  open,
  close,
}) => {
  // const { close, open, isOpen } = useDisclosure();
  // const { resetDocumentFiles } = useDocumentStore();

  React.useEffect(() => {
    if (isDone) {
      close();
    }
  }, [isDone, close]);

  return (
    <>
      {triggerButton &&
        React.cloneElement(triggerButton, {
          onClick: () => {
            open();
            // resetDocumentFiles();
          },
        })}
      <Drawer
        isOpen={isOpen}
        onClose={close}
        title={title}
        size={size}
        renderFooter={() => (
          <div className="flex-shrink-0 px-4 py-4 flex justify-end space-x-2">
            <Button
              variant="secondary"
              size="lg"
              onClick={close}
            >
              Cancel
            </Button>
            {submitButton}
          </div>
        )}
      >
        {children}
      </Drawer>
    </>
  );
};
