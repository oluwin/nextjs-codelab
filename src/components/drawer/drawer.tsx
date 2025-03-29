import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import 'intersection-observer';
import * as React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

export type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  renderFooter: () => React.ReactNode;
  size?: keyof typeof sizes;
};

export const Drawer = ({
  title,
  children,
  isOpen,
  onClose,
  renderFooter,
  size = 'md',
}: DrawerProps) => {
  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden z-40"
        open={isOpen}
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 fixed inset-0 bg-[#083503a9] bg-opacity-40 transition-opacity" />
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={React.Fragment}
              enter="transform transition ease-in-out duration-300 sm:duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                className={clsx('w-screen', sizes[size])}
              >
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg leading-6 font-bold text-[#111827] ">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={onClose}
                          >
                            <span className="sr-only">
                              Close panel
                            </span>
                            <XMarkIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                  <div>{renderFooter()}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
