import { Paper, Avatar, IconButton, Typography, Box } from '@mui/material';
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
        <EditContactWindow id={id} />
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
