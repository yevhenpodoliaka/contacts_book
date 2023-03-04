import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from '../redux/phoneBook/filterSlice';
import { Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import{memo}from "react"


 const Filter=()=> {
   const value = useSelector(getFilterValue);
   const dispatch = useDispatch();
   const onChangeFilter = e => {
     dispatch(setFilter(e.target.value));
   };
   
   return (
     <Paper
       sx={{
         position: 'sticky',
         top: '65px',
         zIndex: '555',
         backgroundColor: '#1976d2',
         display: 'flex',
         alignItems: 'center',
       }}
     >
       <SearchIcon color="secondary" sx={{ ml:"8px"}} />
       <InputBase
         component="form"
         value={value}
         onChange={onChangeFilter}
         placeholder=" Find contacts by name or number "
         sx={{ color: 'white', px: '8px', width: '100%' }}
       />
     </Paper>
   );
 }
export default memo(Filter)
