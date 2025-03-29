import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { IconButton } from './icon-button';

interface EditIconButtonProps {
  onClick?: any;
}
export function EditIconButton({
  onClick,
}: EditIconButtonProps) {
  return (
    <IconButton onClick={onClick} variant="neutral">
      <PencilSquareIcon className="h-4 w-4 text-neutral-800" />
    </IconButton>
  );
}
