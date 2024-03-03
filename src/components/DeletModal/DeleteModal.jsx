import css from './DeleteModal.module.css';
import { selectModalContact } from '../../redux/modal/selectors';
import Contact from '../ContactList/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModal } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const DeleteModal = () => {
  const { name, number, id } = useSelector(selectModalContact);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(setDeleteModal(false));
  }

  function handleDeleteContact() {
    dispatch(deleteContact(id));
    closeModal();
  }

  return (
    <div className={css.container}>
      <button className={css.close} onClick={closeModal}>
        <IoIosCloseCircleOutline size="24" className={css.closeIcon} />
      </button>
      <p className={css.text}> Delete a contact?</p>
      <div className={css.contact}>
        <Contact names={name} number={number} />
      </div>
      <div className={css.battonWrapper}>
        <button onClick={closeModal} type="button" className={css.button}>
          <FaArrowLeftLong size="20" />
          Back
        </button>
        <button
          onClick={handleDeleteContact}
          type="button"
          className={css.button}
        >
          Delete
          <MdOutlineDeleteForever size="20" />
        </button>
      </div>
    </div>
  );
};
export default DeleteModal;
