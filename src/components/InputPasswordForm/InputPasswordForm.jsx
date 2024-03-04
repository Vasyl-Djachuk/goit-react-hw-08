import { Field, ErrorMessage } from 'formik';
import { FaCheck } from 'react-icons/fa6';
import { PiLockKeyFill } from 'react-icons/pi';
import { BiErrorCircle } from 'react-icons/bi';
import ShowPasswordIcon from '../ShowPasswordIcon/ShowPasswordIcon';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowPassword } from '../../redux/data/selectors';
import css from './InputPasswordForm.module.css';
import { setShowPassword } from '../../redux/data/slice';

const InputPasswordForm = ({
  handlePaswordCheck,
  checkPassIcon,
  errorChek,
  check,
}) => {
  const passwordId = useId();
  const dispatch = useDispatch();
  const showPassword = useSelector(selectShowPassword);

  const handleShowPassword = () => {
    dispatch(setShowPassword(!showPassword));
  };

  return (
    <div className={css.wrapper}>
      <Field
        className={css.input}
        type={showPassword ? 'text' : 'password'}
        name={check ? 'check' : 'password'}
        id={passwordId}
        required
        onInput={handlePaswordCheck}
      ></Field>
      <label className={css.label} htmlFor={passwordId}>
        {check ? 'Repeat password' : 'Password'}
      </label>
      <ErrorMessage
        className={css.error}
        name={check ? 'check' : 'password'}
        component="div"
      />
      <PiLockKeyFill className={css.userIcon} />
      {checkPassIcon && <FaCheck className={css.checkOk} />}
      {errorChek && <BiErrorCircle className={css.iconError} />}
      <ShowPasswordIcon show={showPassword} handleShow={handleShowPassword} />
    </div>
  );
};
export default InputPasswordForm;
