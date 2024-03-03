import css from './InputEmailForm.module.css';
import { Field, ErrorMessage } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { useId } from 'react';

const InputEmailForm = () => {
  const emailId = useId();
  return (
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
  );
};
export default InputEmailForm;
