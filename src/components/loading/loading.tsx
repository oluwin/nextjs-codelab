import { useState } from 'react';

import { Spinner } from '../spinner';

interface LoadingProps {
  active: boolean;
  isFullPage?: boolean;
  canCancel?: boolean;
  onCancel?: () => void;
}

export function Loading({
  active,
  isFullPage = false,
  canCancel = false,
  onCancel,
}: LoadingProps) {
  const [canceled, setCanceled] = useState(false);

  const handleCancel = () => {
    setCanceled(true);
    if (onCancel) {
      onCancel();
    }
  };

  if (!active || canceled) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center ${
        isFullPage
          ? 'fixed top-0 left-0 h-screen w-screen bg-gray-500/30'
          : 'h-full w-full'
      } z-50  bg-opacity-50`}
    >
      <Spinner size="md" className="text-gray-900/50" />
      {canCancel && (
        <button
          className="py-2 text-white focus:outline-none"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </div>
  );
}
