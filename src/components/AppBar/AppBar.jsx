import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import css from './AppBar.module.css';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

const AppBars = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar sx={{ mb: 3 }} position="static">
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography> */}
        <div className={css.wrapper}>
          <Navigation />
          <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBars;
