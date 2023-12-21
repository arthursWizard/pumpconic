import { Link } from '@mui/material';
import { Home } from '@mui/icons-material';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <Link className="home" href="/">
        <Home></Home>
      </Link>
    </div>
  );
}
