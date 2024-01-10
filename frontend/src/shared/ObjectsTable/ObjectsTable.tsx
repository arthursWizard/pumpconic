import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ObjectsTable.scss';
import { ComponentClass, ComponentType, ElementType, Fragment, ReactNode, useState } from 'react';
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
import BaseDialog, { DialogActionsProps } from 'shared/BaseDialog/BaseDialog';
import { UpdateDialogProps } from 'types/UpdateDialogProps';

export type RowDef = { id: string; navigation: string;[key: string]: string | number };

type ColumnDefBase<T, K extends keyof T> = {
  name: string;
  key: K;
};

export type ColumnDef<T> = { [K in keyof T]-?: ColumnDefBase<T, K> }[keyof T];

export type EventType = 'navigate' | 'edit' | 'delete';

interface RowItemProps<T> {
  row: T;
  columns: ColumnDef<T>[];
  hasOptionsMenu?: boolean;
  onAction?: (id: string, eventType: EventType) => void;
}

function RowItem<T extends RowDef>({ row, columns, hasOptionsMenu, onAction }: RowItemProps<T>) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent, id?: string, eventType?: EventType) => {
    event.stopPropagation();
    setAnchorEl(null);
    if (id != null && eventType != null && onAction != null) {
      onAction(id, eventType);
    }
  };

  return (
    <TableRow className="table-row" onClick={() => onAction?.(row.id, 'navigate')} hover>
      {columns.map((c) => (
        <TableCell key={c.name}>{row[c.key]}</TableCell>
      ))}
      {hasOptionsMenu && (
        <TableCell>
          <IconButton
            aria-haspopup="true"
            aria-controls={menuOpen ? 'options-menu' : undefined}
            aria-expanded={menuOpen ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu id="options-menu" anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
            <MenuItem onClick={(event) => handleClose(event, row.id, 'edit')}>Edit</MenuItem>
            <MenuItem onClick={(event) => handleClose(event, row.id, 'delete')}>Delete</MenuItem>
          </Menu>
        </TableCell>
      )}
    </TableRow>
  );
}

interface ObjectTableProps<T> {
  rows: T[];
  columns: ColumnDef<T>[];
  hasOptionsMenu?: boolean;
  EditFormDialog?: ComponentType<UpdateDialogProps>;
  onAction?: (id: string, eventType: EventType) => void;
}

export default function ObjectsTable<T extends RowDef>({
  rows,
  columns,
  hasOptionsMenu,
  EditFormDialog,
  onAction,
}: ObjectTableProps<T>) {
  const [editDialog, setEditDialog] = useState<{ open: boolean; id: string | null }>({
    open: false,
    id: null,
  });
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; id: string | null }>({
    open: false,
    id: null,
  });
  const [filter, setFilter] = useState<string>('');

  const handleOnAction = (id: string, eventType: EventType) => {
    switch (eventType) {
      case 'navigate':
        onAction?.(id, eventType);
        break;
      case 'edit':
        setEditDialog({ open: true, id });
        break;
      case 'delete':
        setDeleteDialog({ open: true, id });
        break;
    }
  };

  const handleEdit = (confirmation: boolean) => {
    // TODO: Handle case when adding and id is null
    if (confirmation && editDialog.id != null && onAction != null) {
      onAction(editDialog.id, 'edit');
    }
    setEditDialog({ open: false, id: null });
  };

  const handleDelete = (confirmation: boolean) => {
    if (confirmation && deleteDialog.id != null && onAction != null) {
      onAction(deleteDialog.id, 'delete');
    }
    setDeleteDialog({ open: false, id: null });
  };

  const handleAddNew = () => {
    setEditDialog({ open: true, id: null });
  };

  return (
    <div className="objects-table">
      <div className="action-key-container">
        <FilterDrawer className="drawer">
          <TextField
            className="filter"
            label="Name/Label"
            variant="standard"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          ></TextField>
        </FilterDrawer>
        <Button variant="contained" onClick={() => handleAddNew()}>
          New
        </Button>
      </div>
      <TableContainer className="table" component={Paper}>
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
            {rows
              .filter((row) => S.isEmpty(filter) || row.name.toString().toLowerCase().includes(filter))
              .map((row) => (
                <RowItem
                  key={row.id}
                  row={row}
                  columns={columns}
                  hasOptionsMenu={hasOptionsMenu}
                  onAction={handleOnAction}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {EditFormDialog != null && <EditFormDialog id={editDialog.id} open={editDialog.open} onClose={handleEdit} />}
      <ConfirmationDialog
        open={deleteDialog.open}
        message="Are you sure you want to delete this item?"
        onClose={handleDelete}
      />
    </div>
  );
}
