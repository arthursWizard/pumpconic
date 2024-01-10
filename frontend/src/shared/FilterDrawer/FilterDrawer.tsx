import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Drawer from '@mui/material/Drawer';
import { ReactNode, useState } from 'react';
import './FilterDrawer.scss';

interface FilterDrawerProps {
  children: ReactNode;
  className?: string;
}

export default function FilterDrawer({ children, className }: FilterDrawerProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={['filter-drawer', className ?? ''].join(' ')}>
      <IconButton onClick={() => setOpen(true)}>
        <FilterAltIcon />
      </IconButton>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-body">
          <h2>Filters</h2>
          {children}
        </div>
      </Drawer>
    </div>
  );
}
