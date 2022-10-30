import { AppBar,  Toolbar, IconButton } from '@mui/material';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import AddContactWindow from './AddContactWindow';
import { useDispatch } from 'react-redux';
import { toggleShowFavorite } from '../redux/phoneBook/filterSlice';

export default function BottomAppBar() {
  const dispatch = useDispatch();
  return (
     <>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="favorite list"
            size="large"
            onClick={() => dispatch(toggleShowFavorite())}
          >
            <FolderSpecialIcon />
          </IconButton>
          <AddContactWindow />
        </Toolbar>
      </AppBar>
    </>
  );
}
