import { Paper, Avatar, Typography, Box } from '@mui/material';

import ToggledFavoriteButton from './ToggledFavoriteButton';
import DeleteContactButton from './DeleteContactButton';
import EditContactButton from './EditContactButton';

const ContactItem = ({
  id,
  name,
  phone,
  email,
  favorite,
  setContactId,
  openModal,
}) => {

  const firstLetter = name[0];
  return (
    <>
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
          <DeleteContactButton id={id} name={name} />
          <EditContactButton
            id={id}
            setContactId={setContactId}
            openModal={openModal}
          />
          <ToggledFavoriteButton id={id} favorite={favorite} name={name} />
        </Box>
      </Paper>
    </>
  );
};
export default ContactItem;
