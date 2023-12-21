import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import './ConfirmationDialog.scss';

interface ConfirmationDialogProps {
  open: boolean;
  message?: string;
  onClose: (value: boolean) => void;
}

export default function ConfirmationDialog({ open, message, onClose }: ConfirmationDialogProps) {
  return (
    <Dialog fullWidth={true} open={open}>
      <DialogTitle>Confirmation</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button color="secondary" onClick={() => onClose(false)}>
          Cancel
        </Button>
        <Button variant="contained" onClick={() => onClose(true)}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
