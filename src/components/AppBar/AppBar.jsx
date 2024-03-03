import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import css from './AppBar.module.css';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Typography } from '@mui/material';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { setAddContactModal } from '../../redux/modal/slice';
import { selectAddModal } from '../../redux/modal/selectors';

const AppBars = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const AddModal = useSelector(selectAddModal);

  const toggleAddContactModal = () => {
    dispatch(setAddContactModal(!AddModal));
  };

  return (
    <AppBar sx={{ mb: 3 }} position="absolute">
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography> */}
        <div className={css.wrapper}>
          <Navigation />
          {isLoggedIn && (
            <div className={css.tools}>
              <Button onClick={toggleAddContactModal} color={'inherit'}>
                Add contact
              </Button>
              <SearchBox />
            </div>
          )}
          <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBars;
