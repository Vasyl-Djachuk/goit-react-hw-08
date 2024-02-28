import { useDispatch } from 'react-redux';
import { register } from '../../redux/author/operations';
import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // e.preventDefault();
    // const form = e.currentTarget;
    dispatch(register(values));
    // form.reset();
    actions.resetForm();
  };
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
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
          <label htmlFor={emailId}>Email</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailId}
          ></Field>
          <ErrorMessage className={css.error} name="email" component="div" />
        </div>

        <div className={css.wrapper}>
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
          Register
        </button>
      </Form>
    </Formik>
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};
