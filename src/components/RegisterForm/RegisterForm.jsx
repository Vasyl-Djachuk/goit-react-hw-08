import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/author/operations';
import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { PiLockKeyFill } from 'react-icons/pi';
import {
  selectPassword,
  selectPasswordCheck,
} from '../../redux/data/selectors';
import { setPassword, setPasswordCheck } from '../../redux/data/slice';
import { BiErrorCircle } from 'react-icons/bi';

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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const checkId = useId();
  console.log(passwordCheck);
  const errorChek =
    passwordCheck !== '' && password.length > 0 && passwordCheck !== password;
  return (
    <div className={css.comtainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form} autoComplete="off">
          <p>{password === passwordCheck ? 'ok' : 'not'}</p>
          <div className={css.wrapper}>
            {/* <label className={css.label} htmlFor={nameId}>
              Name
            </label> */}
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

          <div className={css.wrapper}>
            <Field
              className={css.input}
              type="text"
              name="email"
              id={emailId}
              required
            ></Field>
            <label className={css.label} htmlFor={emailId}>
              Email
            </label>
            <ErrorMessage className={css.error} name="email" component="div" />
            <MdOutlineEmail className={css.userIcon} />
          </div>

          <div className={css.wrapper}>
            <Field
              className={css.input}
              type="password"
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
            {errorChek && <BiErrorCircle className={css.iconError} />}
          </div>
          <div className={css.wrapper}>
            <Field
              className={css.input}
              type="password"
              name="check"
              id={checkId}
              required
              onInput={handlePaswordCheck}
            ></Field>
            <label className={css.label} htmlFor={checkId}>
              Repeat password
            </label>
            <ErrorMessage className={css.error} name="check" component="div" />

            {errorChek && <BiErrorCircle className={css.iconError} />}
            <PiLockKeyFill className={css.userIcon} />
          </div>

          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
