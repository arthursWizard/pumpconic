import { ReactNode } from 'react';
import BaseDialog, { DialogActionsProps } from 'shared/BaseDialog/BaseDialog';
import './FormDialog.scss';

interface FormDialogProps extends DialogActionsProps {
  children: ReactNode;
  isAdding: boolean;
}

export default function FormDialog({ open, children, isAdding, onClose }: FormDialogProps) {
  return (
    <BaseDialog open={open} title={isAdding ? 'Add' : 'Update'} confirmationButtonText="Accept" onClose={onClose}>
      <div className="form-dialog">{children}</div>
    </BaseDialog>
  );
}
