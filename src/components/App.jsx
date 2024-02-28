import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/author/operations';
import { useAuth } from '../hooks';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
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
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

// import 'modern-normalize';
// import css from './App.module.css';
// import { ContactList } from './ContactList/ContactList';
// import { SearchBox } from './SearchBox/SearchBox';
// import { ContactForm } from './ContactForm/ContactForm';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading, selectError } from '../redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/operations';
// import Loader from 'react-spinners/PuffLoader';

// const override = {
//   display: 'block',
//   margin: '0 auto',
//   borderColor: 'red',
// };

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   const color = '#6aabe4';

//   return (
//     <>
//       <div>
//         <h1 className={css.main}>Phonebook</h1>
//         <ContactForm />
//         <SearchBox />
//         <ContactList />
//         {error && <p>Something went wrong, please try again.</p>}
//         {isLoading && (
//           <div className={css.modal}>
//             <Loader
//               color={color}
//               loading={true}
//               cssOverride={override}
//               size={100}
//               aria-label="Loading Spinner"
//               data-testid="loader"
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
