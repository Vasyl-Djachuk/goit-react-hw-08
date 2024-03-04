import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/author/operations';
import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import {
  selectPassword,
  selectPasswordCheck,
} from '../../redux/data/selectors';
import { setPassword, setPasswordCheck } from '../../redux/data/slice';

import { NavLink } from 'react-router-dom';

import InputEmailForm from '../InputEmailForm/InputEmailForm';
import InputPasswordForm from '../InputPasswordForm/InputPasswordForm';
import { BiSolidUser } from 'react-icons/bi';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
  check: Yup.string().min(7, 'Too Short!').required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  check: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const passwordCheck = useSelector(selectPasswordCheck);
  const password = useSelector(selectPassword);

  const handlePaswordCheck = e => {
    if (e.target.name === `password`) {
      dispatch(setPassword(e.target.value));
    } else {
      dispatch(setPasswordCheck(e.target.value));
    }
  };

  const nameId = useId();

  const errorChek =
    passwordCheck !== '' && password.length > 0 && passwordCheck !== password;
  const checkPassIcon = password === passwordCheck && password.length > 6;

  const handleSubmit = (values, actions) => {
    console.log(checkPassIcon);

    delete values.check;
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.comtainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form} autoComplete="off">
          <p className={css.title}>Registration form</p>
          <div className={css.wrapper}>
            <BiSolidUser className={css.userIcon} />
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameId}
              required
            ></Field>
            <label className={css.label} htmlFor={nameId}>
              Name
            </label>
            <ErrorMessage className={css.error} name="name" component="div" />
          </div>
          <InputEmailForm />
          <InputPasswordForm
            handlePaswordCheck={handlePaswordCheck}
            checkPassIcon={checkPassIcon}
            errorChek={errorChek}
          />
          <InputPasswordForm
            handlePaswordCheck={handlePaswordCheck}
            checkPassIcon={checkPassIcon}
            errorChek={errorChek}
            check={true}
          />

          <button
            disabled={!checkPassIcon}
            className={css.button}
            type="submit"
          >
            Register
          </button>
          <NavLink to="/login" className={css.link}>
            Already have an account? Log in
          </NavLink>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
