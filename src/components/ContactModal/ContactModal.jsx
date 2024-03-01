import Modal from 'react-modal';
import css from './ContactModal.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModal, setEditModal } from '../../redux/modal/slice';
import { selectDelModal, selectEditModal } from '../../redux/modal/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import DeleteModal from '../DeletModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import ContactForm from '../ContactForm/ContactForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal-id');

const DeleteContactModal = () => {
  const dispatch = useDispatch();

  const isDeleteModalOpen = useSelector(selectDelModal);
  const isEditModalOpen = useSelector(selectEditModal);
  function closeModal() {
    dispatch(setDeleteModal(false));
    dispatch(setEditModal(false));
  }

  // function handleDeleteContact() {
  //   dispatch(deleteContact(id));
  //   closeModal();
  // }

  return (
    <div>
      <Modal
        isOpen={isEditModalOpen || isDeleteModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {isDeleteModalOpen && <DeleteModal />}
        {isEditModalOpen && <ContactForm />}
      </Modal>
    </div>
  );
};
export default DeleteContactModal;
