import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/author/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';
import { Button, Typography } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <>
      <Typography sx={{ mr: 5 }} className={css.username}>
        Welcome, {user.name}
      </Typography>

      <Button color="inherit" variant="text" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
