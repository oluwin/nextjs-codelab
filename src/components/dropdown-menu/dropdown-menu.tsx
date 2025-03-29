'use client'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { Children, Ref, useState } from 'react'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { usePopper } from 'react-popper'
import { Button } from '@/components/button'

interface DropdownMenuProps {
  buttonVariant?: any
  buttonSize?: any
  buttonTrigger?: React.ReactElement
  buttonTitle?: string
  isLoading?: boolean
  children: React.ReactNode
  isOpen?: boolean;
}

export function DropdownMenu({
  buttonVariant = 'default',
  buttonTitle = 'Options',
  buttonSize = 'sm',
  buttonTrigger,
  isLoading = false,
  children,
  isOpen,
}: DropdownMenuProps) {
  const arrayChildren = Children.toArray(children)

  const trigger = buttonTrigger || (
    <Button
      variant={buttonVariant}
      size={buttonSize}
      endIcon={<ArrowDownIcon className={'text-white'} />}
      isLoading={isLoading}
    >
      {buttonTitle}
    </Button>
  )

  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 0],
        },
      },
    ],
  })

  return (
    <Popover as="div" className="relative inline-block text-left">
      <Popover.Button ref={setReferenceElement as Ref<any>} as={'button'}>
        {trigger}
      </Popover.Button>

      {/* <Portal as={Fragment}> */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          className={clsx(
            'z-30 mr-32 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          )}
          ref={setPopperElement as Ref<any>}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className="py-1">{arrayChildren.map((child: any) => child)}</div>
        </Popover.Panel>
      </Transition>
      {/* </Portal> */}
    </Popover>
  )
}
