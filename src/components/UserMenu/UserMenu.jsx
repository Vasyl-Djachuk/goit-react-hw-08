import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/author/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';
import { Button, Typography } from '@mui/material';
import { FaRegCircleUser } from 'react-icons/fa6';

const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <Typography sx={{ mr: 5 }} className={css.username}>
        <FaRegCircleUser size="22" /> {user.name}
      </Typography>

      <Button color="inherit" variant="text" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
