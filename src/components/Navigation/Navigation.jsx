import { useAuth } from '../../hooks';
import css from './Navigation.module.css';
import Link from '@mui/material/Link';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link color="inherit" href="/" underline="none" className={css.link}>
        Home
      </Link>
      {isLoggedIn && (
        <Link
          color="inherit"
          href="/contacts"
          underline="none"
          className={css.link}
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};
export default Navigation;
