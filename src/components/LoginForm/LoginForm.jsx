import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/author/operations';
import css from './LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

const contactSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
      autoComplete="off"
    >
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor={emailId}>Email</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailId}
          ></Field>
          <ErrorMessage className={css.error} name="email" component="div" />
        </div>
        <div className={css.label}>
          <label htmlFor={passwordId}>Password</label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordId}
          ></Field>
          <ErrorMessage className={css.error} name="password" component="div" />
        </div>
        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};
