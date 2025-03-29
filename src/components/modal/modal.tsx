import {
  Dialog as UIDialog,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
import { XCircle } from 'lucide-react';
import * as React from 'react';

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
  xl: 'max-w-5xl',
  full: 'max-w-full',
};

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialFocus?: React.MutableRefObject<null>;
  renderFooter?: () => React.ReactNode | null;
  size?: keyof typeof sizes;
}

export const ModalTitle = UIDialog.Title;

export const ModalDescription = UIDialog.Description;

export const Modal = ({
  isOpen,
  onClose,
  children,
  initialFocus,
  renderFooter,
  size = 'md',
}: ModalProps) => {
  return (
    <>
      <Transition.Root show={isOpen} as={React.Fragment}>
        <UIDialog
          as="div"
          static
          className="fixed inset-0 z-[1000] overflow-y-auto"
          open={isOpen}
          onClose={onClose}
          initialFocus={initialFocus}
        >
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#002604ae] bg-opacity-40 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className={clsx(
                  'inline-block w-screen transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:px-10 sm:py-8 sm:align-middle',
                  sizes[size]
                )}
              >
                <>
                  <div className="absolute right-10 top-7 ml-3 flex h-7 items-center">
                    <button
                      className="rounded-md bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-gray-500"
                      onClick={onClose}
                    >
                      <span className="sr-only">
                        Close panel
                      </span>
                      <XCircle
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {children}
                  {renderFooter && (
                    <div className="flex items-center justify-start gap-x-5 pt-8">
                      {renderFooter()}
                    </div>
                  )}
                </>
              </div>
            </Transition.Child>
          </div>
        </UIDialog>
      </Transition.Root>
    </>
  );
};
