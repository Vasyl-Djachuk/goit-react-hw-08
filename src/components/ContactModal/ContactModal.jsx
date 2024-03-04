import Modal from 'react-modal';
import css from './ContactModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModal, setEditModal } from '../../redux/modal/slice';
import { selectDelModal, selectEditModal } from '../../redux/modal/selectors';
import DeleteModal from '../DeletModal/DeleteModal';
import ContactForm from '../ContactForm/ContactForm';
import { IoIosCloseCircleOutline } from 'react-icons/io';

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

  return (
    <div className={css.container}>
      <Modal
        isOpen={isEditModalOpen || isDeleteModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {isDeleteModalOpen && <DeleteModal />}

        {isEditModalOpen && (
          <div className={css.container}>
            <ContactForm />
            <IoIosCloseCircleOutline
              onClick={closeModal}
              size="34"
              className={css.icon}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};
export default DeleteContactModal;
