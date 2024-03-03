import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/author/operations';
import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { PiLockKeyFill } from 'react-icons/pi';
import {
  selectPassword,
  selectPasswordCheck,
  selectShowPassword,
} from '../../redux/data/selectors';
import {
  setPassword,
  setPasswordCheck,
  setShowPassword,
} from '../../redux/data/slice';
import { BiErrorCircle, BiSolidUser } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa6';

import { NavLink } from 'react-router-dom';
import ShowPasswordIcon from '../ShowPasswordIcon/ShowPasswordIcon';
import InputEmailForm from '../InputEmailForm/InputEmailForm';
import InputPasswordForm from '../InputPasswordForm/InputPasswordForm';

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

  const handleSubmit = (values, actions) => {
    delete values.check;
    dispatch(register(values));
    actions.resetForm();
  };

  const handlePaswordCheck = e => {
    if (e.target.name === `password`) {
      dispatch(setPassword(e.target.value));
    } else {
      dispatch(setPasswordCheck(e.target.value));
    }
  };

  // const handleShowPassword = () => {
  //   dispatch(setShowPassword(!showPassword));
  // };

  const nameId = useId();
  // const emailId = useId();

  // const checkId = useId();
  console.log(passwordCheck);
  const errorChek =
    passwordCheck !== '' && password.length > 0 && passwordCheck !== password;
  const checkPassIcon = password === passwordCheck && password.length > 6;
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
          {/* <div className={css.wrapper}>
            <Field
              className={css.input}
              type={showPassword ? 'text' : 'password'}
              name="password"
              id={passwordId}
              required
              onInput={handlePaswordCheck}
            ></Field>
            <label className={css.label} htmlFor={passwordId}>
              Password
            </label>
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
            <PiLockKeyFill className={css.userIcon} />
            {checkPassIcon && <FaCheck className={css.checkOk} />}
            {errorChek && <BiErrorCircle className={css.iconError} />}
            <ShowPasswordIcon
              show={showPassword}
              handleShow={handleShowPassword}
            />
            {!showPassword ? (
              <GrFormViewHide
                onClick={handleShowPassword}
                className={css.showPassword}
              />
            ) : (
              <BiShow
                onClick={handleShowPassword}
                className={css.showPassword}
              />
            )}
          </div> */}

          {/* <div className={css.wrapper}>
            <Field
              className={css.input}
              type={showPassword ? 'text' : 'password'}
              name="check"
              id={checkId}
              required
              onInput={handlePaswordCheck}
            ></Field>
            <label className={css.label} htmlFor={checkId}>
              Repeat password
            </label>
            <ErrorMessage className={css.error} name="check" component="div" />
            {checkPassIcon && <FaCheck className={css.checkOk} />}
            {errorChek && <BiErrorCircle className={css.iconError} />}
            <ShowPasswordIcon
              show={showPassword}
              handleShow={handleShowPassword}
            />
            {!showPassword ? (
              <GrFormViewHide
                onClick={handleShowPassword}
                className={css.showPassword}
              />
            ) : (
              <BiShow
                onClick={handleShowPassword}
                className={css.showPassword}
              />
            )}
            <PiLockKeyFill className={css.userIcon} />
          </div> */}

          <button className={css.button} type="submit">
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
