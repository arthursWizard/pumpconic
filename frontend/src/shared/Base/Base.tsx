import styles from './Base.module.scss';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface BaseProps {
  title: string;
  children: ReactNode;
  hasBackNavigation?: boolean;
}

export default function Base({ title, children, hasBackNavigation }: BaseProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.base}>
      <div className={styles.titleContainer}>
        {hasBackNavigation && (
          <IconButton className={styles.returnButton} onClick={() => navigate(-1)}>
            <NavigateBeforeIcon />
          </IconButton>
        )}
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}
