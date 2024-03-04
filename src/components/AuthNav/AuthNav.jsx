import { Button } from '@mui/material';
import css from './AuthNav.module.css';
import Link from '@mui/material/Link';

const AuthNav = () => {
  return (
    <>
      <Button color="inherit" className={css.button}>
        <Link
          color="inherit"
          underline="none"
          className={css.link}
          href="/register"
        >
          Register
        </Link>
      </Button>

      <Button color="inherit" className={css.button}>
        <Link
          color="inherit"
          underline="none"
          className={css.link}
          href="/login"
        >
          Log In
        </Link>
      </Button>
    </>
  );
};
export default AuthNav;
