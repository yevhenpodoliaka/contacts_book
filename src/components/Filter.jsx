import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from '../redux/phoneBook/filterSlice';
import { Paper,  InputBase } from '@mui/material';

export default function Filter() {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Paper>
      <InputBase
        component="form"
        value={value}
        onChange={onChangeFilter}
        placeholder=" Find contacts by name "
      />
    </Paper>
  );
}
