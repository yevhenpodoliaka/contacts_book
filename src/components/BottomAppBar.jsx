import * as React from 'react';
import { AppBar, Toolbar, IconButton, Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleShowFavorite,
  getShowFavoriteValue,
} from '../redux/phoneBook/filterSlice';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const BottomAppBar = ({ onOpenModal }) => {
  const dispatch = useDispatch();
  const isShowFavoriteContact = useSelector(getShowFavoriteValue);

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
            {isShowFavoriteContact ? <ImportContactsIcon /> : <FavoriteIcon />}
          </IconButton>

          <StyledFab color="secondary" aria-label="add" onClick={onOpenModal}>
            <AddIcon />
          </StyledFab>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BottomAppBar;
