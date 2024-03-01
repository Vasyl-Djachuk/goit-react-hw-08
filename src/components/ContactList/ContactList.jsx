import css from './ContactList.module.css';
import Contact from './Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContact } from '../../redux/contacts/selectors';
import DeleteContactModal from '../ContactModal/ContactModal';
import { selectDelModal } from '../../redux/modal/selectors';
import {
  setDeleteModal,
  setEditModal,
  setModalId,
} from '../../redux/modal/slice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContact);
  const isDeleteModalOpen = useSelector(selectDelModal);

  const handleDeleteClick = id => {
    dispatch(setModalId(id));
    dispatch(setDeleteModal(true));
  };
  function handleEdit(id) {
    dispatch(setModalId(id));
    dispatch(setEditModal(true));
  }
  return (
    <>
      <ul className={css.list}>
        {contacts.length > 0 &&
          contacts.map(({ id, name: names, number }) => {
            return (
              <li className={css.item} key={id}>
                <Contact
                  id={id}
                  names={names}
                  number={number}
                  handleDeleteClick={handleDeleteClick}
                  handleEdit={handleEdit}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;
