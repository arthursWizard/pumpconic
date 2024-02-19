import FormDialog from 'shared/FormDialog/FormDialog';
import { UpdateDialogProps } from 'types/UpdateDialogProps';

export default function ActivityFormDialog({ id, open, onClose }: UpdateDialogProps) {
  return (
    <FormDialog open={open} isAdding={id == null} onClose={onClose}>
      {id}
    </FormDialog>
  );
}
