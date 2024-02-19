import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import styles from './RowItem.module.scss';

export type RowDef = { id: string; [key: string]: string | number };

type ColumnDefBase<T, K extends keyof T> = {
  name: string;
  key: K;
};

export type ColumnDef<T> = { [K in keyof T]-?: ColumnDefBase<T, K> }[keyof T];

export type RowEventType = 'navigate' | 'edit' | 'delete' | 'start';

interface RowItemProps<T> {
  row: T;
  columns: ColumnDef<T>[];
  hasOptionsMenu?: boolean;
  hasStartOption?: boolean;
  onRowAction?: (id: string, eventType: RowEventType) => void;
}

export default function RowItem<T extends RowDef>({
  row,
  columns,
  hasOptionsMenu,
  hasStartOption,
  onRowAction,
}: RowItemProps<T>) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = (event: React.MouseEvent, id?: string, eventType?: RowEventType) => {
    event.stopPropagation();
    setAnchorEl(null);
    if (id != null && eventType != null && onRowAction != null) {
      onRowAction(id, eventType);
    }
  };

  return (
    <TableRow className={styles.tableRow} onClick={() => onRowAction?.(row.id, 'navigate')} hover>
      {columns.map((c) => (
        <TableCell key={c.name}>{row[c.key]}</TableCell>
      ))}
      {hasOptionsMenu && (
        <TableCell>
          <IconButton
            aria-haspopup="true"
            aria-controls={menuOpen ? 'options-menu' : undefined}
            aria-expanded={menuOpen ? 'true' : undefined}
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu id="options-menu" anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
            {hasStartOption && <MenuItem onClick={(event) => handleMenuClose(event, row.id, 'start')}>Start</MenuItem>}
            <MenuItem onClick={(event) => handleMenuClose(event, row.id, 'edit')}>Edit</MenuItem>
            <MenuItem onClick={(event) => handleMenuClose(event, row.id, 'delete')}>Delete</MenuItem>
          </Menu>
        </TableCell>
      )}
    </TableRow>
  );
}
