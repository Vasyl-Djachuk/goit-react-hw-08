import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

import { selectLoading } from '../../redux/contacts/selectors';
import { useAuth } from '../../hooks';

const BackdropLoder = () => {
  const loding = useSelector(selectLoading);

  const { isRefreshing } = useAuth();

  const handleClose = () => {};
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={loding || isRefreshing}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default BackdropLoder;
