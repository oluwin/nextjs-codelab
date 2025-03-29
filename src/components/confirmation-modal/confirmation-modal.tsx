import * as React from 'react'
import { ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

import { Modal, ModalTitle } from '@/components/modal'
import { useDisclosure } from '@/hooks/use-disclosure'
import {Button} from "@/components/button";



export type ConfirmationModalProps = {
  triggerButton: React.ReactElement
  confirmButton: React.ReactElement
  title: string
  body?: string
  cancelButtonText?: string
  icon?: 'danger' | 'info'
  isDone?: boolean
}

export const ConfirmationModal = ({
  triggerButton,
  confirmButton,
  title,
  body = '',
  cancelButtonText = 'Cancel',
  icon = 'danger',
  isDone = false,
}: ConfirmationModalProps) => {
  const { close, open, isOpen } = useDisclosure()

  const cancelButtonRef = React.useRef(null)

  React.useEffect(() => {
    if (isDone) {
      close()
    }
  }, [isDone, close])

  const trigger = React.cloneElement(triggerButton, {
    onClick: open,
  })

  return (
    <>
      {trigger}
      <Modal isOpen={isOpen} onClose={close} initialFocus={cancelButtonRef}>
        <div className="my-5  p-4 sm:flex sm:items-start md:my-0">
          {icon === 'danger' && (
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationCircleIcon
                className="h-6 w-6 text-red-600"
                aria-hidden="true"
              />
            </div>
          )}

          {icon === 'info' && (
            <div className="bg-blue-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
              <InformationCircleIcon
                className="text-blue-600 h-6  w-6"
                aria-hidden="true"
              />
            </div>
          )}
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <ModalTitle
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {title}
            </ModalTitle>
            {body && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">{body}</p>
              </div>
            )}
          </div>
        </div>
        <div className="mx-2 my-3 mt-4 flex justify-center space-x-4 p-4 md:mx-0 md:my-0 md:justify-end">
          <Button
            type="button"
            variant="inverse"
            className="focus:ring-red-400 inline-flex w-auto justify-center rounded-sm border focus:ring-1 focus:ring-offset-1 sm:mt-0 sm:text-sm"
            onClick={close}
            ref={cancelButtonRef}
          >
            {cancelButtonText}
          </Button>
          {confirmButton}
        </div>
      </Modal>
    </>
  )
}
