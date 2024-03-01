import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';

const Contact = ({ id, names, number, handleDeleteClick, handleEdit }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.item}>
          <FaUser className={css.icon} />
          <p>{names}</p>
        </li>
        <li className={css.item}>
          <FaPhoneAlt className={css.icon} />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" onClick={() => handleEdit(id)}>
        <FaRegEdit />
      </button>
      <button onClick={() => handleDeleteClick(id)} className={css.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
