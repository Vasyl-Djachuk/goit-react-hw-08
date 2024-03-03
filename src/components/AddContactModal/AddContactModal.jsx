import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import css from './AddContactModal.module.css';
import clsx from 'clsx';
import { selectAddModal } from '../../redux/modal/selectors';
import { setAddContactModal } from '../../redux/modal/slice';

const AddContactModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAddModal);
  const toggleModal = e => {
    if (e.target.dataset.id) dispatch(setAddContactModal(!isOpen));
  };
  return (
    <div
      onClick={toggleModal}
      className={clsx(css.backdrop, isOpen && css.BeckdropActive)}
      data-id="1"
    >
      <div className={clsx(css.container, isOpen && css.active)}>
        <ContactForm />
      </div>
    </div>
  );
};
export default AddContactModal;
