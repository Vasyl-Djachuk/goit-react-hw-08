import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { refreshUser } from '../redux/author/operations';
import { useAuth } from '../hooks';
import css from './App.module.css';
import Loader from 'react-spinners/PuffLoader';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const color = '#6aabe4';
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {!isRefreshing ? (
          <>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<HomePage />} />
          </>
        ) : (
          <Route
            path="*"
            element={
              <div className={css.loader}>
                <Loader
                  color={color}
                  loading={isRefreshing}
                  cssOverride={override}
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            }
          />
        )}
      </Route>
    </Routes>
  );
};

export default App;
