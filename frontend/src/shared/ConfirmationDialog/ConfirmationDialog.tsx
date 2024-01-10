import DialogContentText from '@mui/material/DialogContentText';
import BaseDialog, { DialogActionsProps } from 'shared/BaseDialog/BaseDialog';

interface ConfirmationDialogProps extends DialogActionsProps {
  message?: string;
}

export default function ConfirmationDialog({ open, message, onClose }: ConfirmationDialogProps) {
  return (
    <BaseDialog open={open} title="Confirmation" onClose={onClose}>
      <DialogContentText>{message}</DialogContentText>
    </BaseDialog>
  );
}
