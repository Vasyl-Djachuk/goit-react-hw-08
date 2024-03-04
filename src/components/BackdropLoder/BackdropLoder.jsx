import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackdropLoder } from '../../redux/data/selectors';
import { setBackdropLoder } from '../../redux/data/slice';
import { selectLoading } from '../../redux/contacts/selectors';
import { useAuth } from '../../hooks';

const BackdropLoder = () => {
  const loding = useSelector(selectLoading);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isOpen = loding || isRefreshing;
  const handleClose = () => {
    // dispatch(setBackdropLoder(!isOpen));
  };
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
