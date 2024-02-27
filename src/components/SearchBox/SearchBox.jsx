import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

export const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const searchValue = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={searchValue.filter}
        onChange={handleChange}
        id={id}
      />
    </div>
  );
};
