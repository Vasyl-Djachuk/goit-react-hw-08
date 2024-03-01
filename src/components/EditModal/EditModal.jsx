import { selectModalContact } from '../../redux/modal/selectors';
import { setDeleteModal } from '../../redux/modal/slice';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditModal = () => {
  const { name, number, id } = useSelector(selectModalContact);
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  function closeModal() {
    dispatch(setDeleteModal(false));
  }
  // function handleDeleteContact() {
  //   dispatch(deleteContact(id));
  //   closeModal();
  // }
  return (
    <div>
      <form>
        <label htmlFor={nameId}></label>
        <input type="text" name="name" id={nameId} />
        <label htmlFor={numberId}></label>
        <input type="text" name="number" id={numberId} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default EditModal;
