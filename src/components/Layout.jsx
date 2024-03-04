import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import AppBars from './AppBar/AppBar';
import BackdropLoder from './BackdropLoder/BackdropLoder';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactError, selectToast } from '../redux/contacts/selectors';
import { setContactError, setToast } from '../redux/contacts/slice';
import { selectAutorError } from '../redux/author/selectors';

const Layout = () => {
  const message = useSelector(selectToast);
  const dispatch = useDispatch();
  const contactError = useSelector(selectContactError);
  const loginError = useSelector(selectAutorError);
  const error = contactError || loginError;

  useEffect(() => {
    if (!error) return;
    toast.error(error);
    dispatch(setContactError(null));
  }, [error, dispatch]);

  useEffect(() => {
    if (message === '') return;
    switch (message) {
      case 'add':
        toast.success('Successfully added!');
        break;
      case 'del':
        toast.success('Deleted successfully!');
        break;
      case 'edit':
        toast.success('Edited successfully!');
        break;
    }

    dispatch(setToast(''));
  }, [message, dispatch]);
  return (
    <div>
      <AppBars />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <BackdropLoder />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
