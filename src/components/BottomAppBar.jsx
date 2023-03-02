import * as React from 'react';
import { AppBar, Toolbar, IconButton, Dialog, Slide, Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleShowFavorite,
  getShowFavoriteValue,
} from '../redux/phoneBook/filterSlice';
import AddContactForm from './AddContactForm';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

          <StyledFab
            color="secondary"
            aria-label="add"
            onClick={handleClickOpen}
          >
            <AddIcon />
          </StyledFab>
          <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <IconButton
              sx={{ width: '25px', height: '25px' }}
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <AddContactForm toggleOpen={setOpen} />
          </Dialog>
        </Toolbar>
      </AppBar>
    </>
  );
}
