import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const searchValue = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <div className={css.container}>
      <form autoComplete="off">
        <label htmlFor={id}>Find contacts by name</label>
        <input
          autoComplete="off"
          className={css.input}
          type="text"
          value={searchValue.filter}
          onChange={handleChange}
          id={id}
        />
      </form>
    </div>
  );
};

export default SearchBox;
