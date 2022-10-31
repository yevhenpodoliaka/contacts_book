import { AppBar,  Toolbar, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AddContactWindow from './AddContactWindow';
import { useDispatch,useSelector } from 'react-redux';
import { toggleShowFavorite,getShowFavoriteValue } from '../redux/phoneBook/filterSlice';

export default function BottomAppBar() {
  const dispatch = useDispatch();
  const isShowFavoriteContact=useSelector(getShowFavoriteValue)
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="favorite list"
            size="large"
            onClick={() => dispatch(toggleShowFavorite())}
          >
            {isShowFavoriteContact?<ImportContactsIcon/>:<FavoriteIcon />}
          </IconButton>
          <AddContactWindow />
        </Toolbar>
      </AppBar>
    </>
  );
}
