import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

import {
  IconButton,
  iconButtonVariants,
} from './icon-button';

interface EllipsisIconButton {
  onClick?: any;
  isButton?: boolean;
  variant?: keyof typeof iconButtonVariants;
}
export function EllipsisIconButton({
  onClick,
  isButton = false,
  variant = 'primary',
}: EllipsisIconButton) {
  return (
    <IconButton
      onClick={onClick}
      variant={variant}
      isButton={isButton}
    >
      <EllipsisHorizontalIcon className={'w-4 h-4'} />
    </IconButton>
  );
}
