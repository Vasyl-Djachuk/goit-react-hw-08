import css from './ContactList.module.css';
import { Contact } from './Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContact } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContact);

  const handleDeleteClick = e => {
    dispatch(deleteContact(e.target.dataset.id));
  };

  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        contacts.map(({ id, name: names, phone }) => {
          return (
            <li className={css.item} key={id}>
              <Contact
                id={id}
                names={names}
                number={phone}
                handleDeleteClick={handleDeleteClick}
              />
            </li>
          );
        })}
    </ul>
  );
};
