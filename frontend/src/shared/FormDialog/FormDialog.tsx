import { ReactNode } from 'react';
import BaseDialog, { DialogActionsProps } from 'shared/BaseDialog/BaseDialog';

interface FormDialogProps extends DialogActionsProps {
  children: ReactNode;
  isAdding: boolean;
}

export default function FormDialog({ open, children, isAdding, onClose }: FormDialogProps) {
  return (
    <BaseDialog open={open} title={isAdding ? 'Add' : 'Update'} confirmationButtonText="Accept" onClose={onClose}>
      <div>{children}</div>
    </BaseDialog>
  );
}
