import { useState, useCallback } from 'react';

const useConfirmModal = (onConfirm?) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  const confirm = useCallback(
    (e) => {
      if (onConfirm) {
        onConfirm(e);
      }
      setIsOpen(false);
    },
    [onConfirm, setIsOpen],
  );

  return {
    isOpen,
    open,
    close,
    confirm,
  };
};

export default useConfirmModal;
