import PropTypes from 'prop-types';

import {
  Paper,
  Avatar,
  IconButton,
  Typography,
  Box,

} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditContactWindow from './EditContactWindow';


export default function ContactItem({
  id,
  name,
  phone,
  email,
  onDeleteContact,
  favorite,
  onToggleFavoriteContact,
}) {
  const firstLetter = name[0];
  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>{firstLetter}</Avatar>
      <Box sx={{ flexGrow: 1, ml: 4 }}>
        <Typography variant="body2">{name}</Typography>
        <Typography variant="body2">{phone}</Typography>
        <Typography variant="body2">{email}</Typography>
      </Box>
      <IconButton
    
        aria-label="delete"
        color="primary"
        onClick={onDeleteContact}
      >
        <DeleteIcon />
      </IconButton>
      <EditContactWindow id={id} />
      <IconButton
        aria-label="favorite"
        color="primary"
        onClick={onToggleFavoriteContact}
    
      >
        {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Paper>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
