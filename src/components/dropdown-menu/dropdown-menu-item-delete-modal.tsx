import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'

import { ConfirmationModal } from '@/components/confirmation-modal'
import { Button } from '@/components/button'

interface DropdownMenuItemDeleteProps {
  mutation: any
  id: any
  modalTitle?: string
  triggerButtonTitle?: string
}

export function DropdownMenuItemDeleteModal({
  mutation,
  id,
  modalTitle = 'Delete Record',
  triggerButtonTitle = 'Delete',
}: DropdownMenuItemDeleteProps) {
  return (
    <ConfirmationModal
      isDone={mutation.isSuccess}
      icon="danger"
      title={modalTitle}
      body="Are you sure you want to delete this record?"
      triggerButton={
        <div className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-800 hover:text-white">
          <TrashIcon className={'mr-2 h-4 w-4'} />
          <span>{triggerButtonTitle}</span>
        </div>
      }
      confirmButton={
        <Button
          isLoading={mutation.isPending}
          type="button"
          className="bg-red-600"
          onClick={() => mutation.mutate(id)}
        >
          Delete
        </Button>
      }
    />
  )
}
