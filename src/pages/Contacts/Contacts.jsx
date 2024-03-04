import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactModal from '../../components/ContactModal/ContactModal';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AddContactModal from '../../components/AddContactModal/AddContactModal';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        {/* <div>{isLoading && 'Request in progress...'}</div> */}
        <ContactList />
        <ContactModal />
        <AddContactModal />
      </HelmetProvider>
    </>
  );
}
