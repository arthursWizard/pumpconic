import { Button, Link } from '@mui/material';
import { Home } from '@mui/icons-material';

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <Home></Home>
      </Link>
    </div>
  );
}
