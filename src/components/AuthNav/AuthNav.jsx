import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Link from '@mui/material/Link';

const AuthNav = () => {
  return (
    <>
      <Link
        color="inherit"
        underline="none"
        className={css.link}
        href="/register"
      >
        Register
      </Link>
      <Link color="inherit" underline="none" className={css.link} href="/login">
        Log In
      </Link>
    </>
  );
};
export default AuthNav;
