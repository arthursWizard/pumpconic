import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react';

export interface DialogActionsProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

interface BaseDialogProps extends DialogActionsProps {
  title: string;
  children: ReactNode;
  confirmationButtonText?: string;
}

export default function BaseDialog({ open, title, children, confirmationButtonText, onClose }: BaseDialogProps) {
  return (
    <Dialog fullWidth={true} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
      <Divider />
      <DialogActions>
        <Button color="secondary" onClick={() => onClose(false)}>
          Cancel
        </Button>
        <Button variant="contained" onClick={() => onClose(true)}>
          {confirmationButtonText ?? 'Confirm'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
