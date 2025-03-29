import { Eye } from 'lucide-react';

import { IconButton } from './icon-button';

export interface ViewIconButtonProp {
  onClick?: any;
}

export function ViewIconButton({
  onClick = () => {},
}: ViewIconButtonProp) {
  return (
    <IconButton onClick={onClick} variant="primary">
      <Eye className="h-4 w-4 text-green" />
    </IconButton>
  );
}
