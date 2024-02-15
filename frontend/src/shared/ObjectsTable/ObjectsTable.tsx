import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import styles from './ObjectsTable.module.scss';
import { ComponentType, useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import { S } from '@mobily/ts-belt';
import ConfirmationDialog from 'shared/ConfirmationDialog/ConfirmationDialog';
import FilterDrawer from 'shared/FilterDrawer/FilterDrawer';
import Button from '@mui/material/Button';
import { UpdateDialogProps } from 'types/UpdateDialogProps';
import RowItem, { ColumnDef, RowEventType, RowDef } from './RowItem/RowItem';

function useRowFiltering<T extends RowDef>(rows: T[]): [T[], string, (v: string) => void] {
  const [displayedRows, setDisplayedRows] = useState<T[]>(rows);
  const [filter, setFilter] = useState<string>('');
  useEffect(
    () =>
      setDisplayedRows(
        rows.filter((r) => S.isEmpty(filter) || r.name.toString().toLowerCase().includes(filter.toLowerCase()))
      ),
    [filter, rows]
  );
  return [displayedRows, filter, setFilter];
}

interface ObjectTableProps<T> {
  rows: T[];
  columns: ColumnDef<T>[];
  hasOptionsMenu?: boolean;
  EditFormDialog?: ComponentType<UpdateDialogProps>;
  onAction?: (id: string, eventType: RowEventType) => void;
}

export default function ObjectsTable<T extends RowDef>({
  rows,
  columns,
  hasOptionsMenu,
  EditFormDialog,
  onAction,
}: ObjectTableProps<T>) {
  const [dialog, setDialog] = useState<{ openDialog: 'edit' | 'delete' | null; id: string | null }>({
    openDialog: null,
    id: null,
  });
  const [displayedRows, filter, setFilter] = useRowFiltering(rows);

  const handleRowAction = (id: string, eventType: RowEventType) => {
    if (eventType === 'navigate') {
      onAction?.(id, eventType);
    } else {
      setDialog({ openDialog: eventType, id });
    }
  };

  const handleEditItem = (confirmation: boolean) => {
    // TODO: Handle case when adding and id is null
    if (confirmation && dialog.id != null && onAction != null) {
      onAction(dialog.id, 'edit');
    }
    setDialog({ openDialog: null, id: null });
  };

  const handleDeleteItem = (confirmation: boolean) => {
    if (confirmation && dialog.id != null && onAction != null) {
      onAction(dialog.id, 'delete');
    }
    setDialog({ openDialog: null, id: null });
  };

  const handleOpenAddNewItemDialog = () => {
    setDialog({ openDialog: 'edit', id: null });
  };

  return (
    <div className={styles.objectsTable}>
      <div className={styles.actionKeyContainer}>
        <FilterDrawer className={styles.drawer}>
          <TextField
            className={styles.filter}
            label="Name/Label"
            variant="standard"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          ></TextField>
        </FilterDrawer>
        <Button variant="contained" onClick={() => handleOpenAddNewItemDialog()}>
          New
        </Button>
      </div>
      <TableContainer className={styles.table} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((c) => (
                <TableCell key={c.name}>{c.name}</TableCell>
              ))}
              {hasOptionsMenu && <TableCell />}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <RowItem
                key={row.id}
                row={row}
                columns={columns}
                hasOptionsMenu={hasOptionsMenu}
                onRowAction={handleRowAction}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {EditFormDialog != null && (
        <EditFormDialog id={dialog.id} open={dialog.openDialog === 'edit'} onClose={handleEditItem} />
      )}
      <ConfirmationDialog
        open={dialog.openDialog === 'delete'}
        message="Are you sure you want to delete this item?"
        onClose={handleDeleteItem}
      />
    </div>
  );
}
