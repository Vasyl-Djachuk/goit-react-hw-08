import 'modern-normalize';
import css from './App.module.css';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import Loader from 'react-spinners/PuffLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const color = '#6aabe4';

  return (
    <>
      <div>
        <h1 className={css.main}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {error && <p>Something went wrong, please try again.</p>}
        {isLoading && (
          <div className={css.modal}>
            <Loader
              color={color}
              loading={true}
              cssOverride={override}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </>
  );
};
