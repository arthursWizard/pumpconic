import { Link } from '@mui/material';
import { Home } from '@mui/icons-material';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.home} href="/">
        <Home></Home>
      </Link>
    </div>
  );
}
