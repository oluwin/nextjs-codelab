import { TrashIcon } from '@heroicons/react/24/outline';

import {
  IconButton,
  iconButtonVariants,
} from './icon-button';

interface DeleteIconButtonProps {
  onClick?: any;
  isButton?: boolean;
  variant?: keyof typeof iconButtonVariants;
}
export function DeleteIconButton({
  onClick,
  isButton = false,
}: DeleteIconButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      variant={'danger'}
      isButton={isButton}
    >
      <TrashIcon className="text-red-500 w-4 h-4" />
    </IconButton>
  );
}
