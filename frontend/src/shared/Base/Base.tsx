import styles from './Base.module.scss';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface BaseProps {
  title: string;
  children: ReactNode;
  hasBackNavigation?: boolean;
}

export default function Base({ title, children, hasBackNavigation }: BaseProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.base}>
      <div className={styles.titleContainer}>
        {hasBackNavigation && location.key !== 'default' && (
          <IconButton className={styles.returnButton} onClick={() => navigate(-1)}>
            <NavigateBeforeIcon />
          </IconButton>
        )}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </div>
  );
}
