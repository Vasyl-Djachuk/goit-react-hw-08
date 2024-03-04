import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/author/operations';
import css from './LoginForm.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputEmailForm from '../InputEmailForm/InputEmailForm';
import InputPasswordForm from '../InputPasswordForm/InputPasswordForm';

import { NavLink } from 'react-router-dom';

const contactSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
      autoComplete="off"
    >
      <Form className={css.form}>
        <p className={css.title}>Login</p>
        <InputEmailForm />
        <InputPasswordForm />

        <button className={css.button} type="submit">
          Log In
        </button>
        <NavLink to="/register" className={css.link}>
          Don't have an account? Registration
        </NavLink>
      </Form>
    </Formik>
  );
};
export default LoginForm;
