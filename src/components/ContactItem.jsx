import * as React from 'react';
import {
  Paper,
  Avatar,
  IconButton,
  Typography,
  Box,
  Dialog,
  Slide,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditContactForm from './EditContactForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ContactItem({
  id,
  name,
  phone,
  email,
  onDeleteContact,
  favorite,
  onToggleFavoriteContact,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const firstLetter = name[0];
  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Avatar
        sx={{
          bgcolor: 'secondary.main',
          width: 24,
          height: 24,
        }}
      >
        {firstLetter}
      </Avatar>
      <Box sx={{ flexGrow: 1, ml: 2 }}>
        <Typography variant="button" display="block">
          {name}
        </Typography>
        <Typography variant="caption" display="block">
          {email}
        </Typography>
        <Typography variant="overline" display="block">
          {phone}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <IconButton
          size="small"
          aria-label="delete"
          color="primary"
          onClick={onDeleteContact}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <div>
          <IconButton
            size="small"
            color="primary"
            aria-label="edit"
            onClick={handleClickOpen}
          >
            <CreateIcon fontSize="inherit" />
          </IconButton>

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

            <EditContactForm id={id} />
          </Dialog>
        </div>
        <IconButton
          size="small"
          aria-label="favorite"
          color="primary"
          onClick={onToggleFavoriteContact}
        >
          {favorite ? (
            <FavoriteIcon fontSize="inherit" />
          ) : (
            <FavoriteBorderIcon fontSize="inherit" />
          )}
        </IconButton>
      </Box>
    </Paper>
  );
}
