import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from '../../redux/contacts/operations';
import {
  selectDelModal,
  selectEditModal,
  selectModalContact,
} from '../../redux/modal/selectors';
import { setEditModal } from '../../redux/modal/slice';
import { refreshUser } from '../../redux/author/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'number format is incorrect')
    .required('Required'),
});

const ContactForm = () => {
  const nameId = useId();
  const telId = useId();
  const isEditModalOpen = useSelector(selectEditModal);
  const contact = useSelector(selectModalContact);
  const dispatch = useDispatch();
  const initialValues = {
    name: isEditModalOpen ? contact.name : '',
    number: isEditModalOpen ? contact.number : '',
  };

  const handleMaskChange = e => {
    if (e.target.name !== `number`) return;
    const number = e.target.value.replace(/\D/g, ``);
    let corected = number.slice(0, 3);
    if (number.length > 3) corected += `-` + number.slice(3, 5);
    if (number.length > 5) corected += `-` + number.slice(5, 7);
    e.target.value = corected;
  };

  const handleSubmit = (values, actions) => {
    if (isEditModalOpen) {
      // values.id = contact.id;
      dispatch(editContact([contact.id, values]));
      dispatch(setEditModal(false));
      dispatch(refreshUser());
    } else {
      values.id;
      dispatch(addContact(values));
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>

        <div className={css.wrapper}>
          <label htmlFor={telId}>Number</label>
          <Field
            className={css.input}
            onInput={handleMaskChange}
            type="text"
            name="number"
            id={telId}
          ></Field>
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <button className={css.button} type="submit">
          {isEditModalOpen ? `Save` : `Add contact`}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
