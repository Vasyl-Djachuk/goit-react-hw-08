import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactModal from '../../components/ContactModal/ContactModal';
import ContactList from '../../components/ContactList/ContactList';

import { fetchContacts } from '../../redux/contacts/operations';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import AddContactModal from '../../components/AddContactModal/AddContactModal';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>

        <ContactList />
        <ContactModal />
        <AddContactModal />
      </HelmetProvider>
    </>
  );
}
