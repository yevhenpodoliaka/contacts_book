import { useState } from 'react';
import { Paper, Avatar, IconButton, Typography, Box } from '@mui/material';

import CreateIcon from '@mui/icons-material/Create';
import ToggledFavoriteButton from './ToggledFavorite';
import DeleteContactButton from './DeleteContactButton';
import Modal from './Modal';
import EditContactForm from './EditContactForm';

 const ContactItem =({ id, name, phone, email, favorite })=> {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

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

          <IconButton
            size="small"
            color="primary"
            aria-label="edit"
            onClick={toggleModal}
          >
            <CreateIcon fontSize="inherit" />
          </IconButton>

          <ToggledFavoriteButton id={id} favorite={favorite} name={name} />
        </Box>
      </Paper>
      <Modal isOpen={modalIsOpen} toggleIsOpen={toggleModal}>
        <EditContactForm id={id} />
      </Modal>
    </>
  );
}
export default ContactItem