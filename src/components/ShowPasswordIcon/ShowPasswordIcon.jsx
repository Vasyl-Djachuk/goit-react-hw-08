import { GrFormViewHide } from 'react-icons/gr';
import { BiShow } from 'react-icons/bi';
import css from './ShowPasswordIcon.module.css';

const ShowPasswordIcon = ({ show, handleShow }) => {
  return (
    <>
      {!show ? (
        <GrFormViewHide onClick={handleShow} className={css.showPassword} />
      ) : (
        <BiShow onClick={handleShow} className={css.showPassword} />
      )}
    </>
  );
};
export default ShowPasswordIcon;
