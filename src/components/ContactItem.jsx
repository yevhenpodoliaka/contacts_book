import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  useDeleteContactMutation,
  useToggleFavoriteContactMutation,
} from '../redux/phoneBook/phoneBookApi';

import { Paper, Avatar, IconButton, Typography, Box } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Modal from './Modal';
import EditContactForm from './EditContactForm';

export default function ContactItem({ id, name, phone, email, favorite }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const [
    deleteContact,
    {
      isSuccess: isSuccessDeleted,
      error: isErrorDeleted,
      isLoading: isDeleted,
    },
  ] = useDeleteContactMutation();
  const [
    toggleFavoriteContact,
    {
      isSuccess: isSuccessToggledFavorite,
      error: isErrorToggledFavorite,
      isLoading: isToggledFavorite,
    },
  ] = useToggleFavoriteContactMutation();

  useEffect(() => {
    if (isSuccessDeleted) {
      toast.success(`contact ${name} is deleted`);
    }
    if (isSuccessToggledFavorite) {
      toast.success(`status contact ${name} "is favorite" changed`);
    }
    if (isErrorDeleted) {
      toast.error(`an error occurred while deleting a contact${name}`);
    }
    if (isErrorToggledFavorite) {
      toast.error(
        `an error occurred while changing the status of a contact${name}`
      );
    }
  }, [
    isErrorDeleted,
    isErrorToggledFavorite,
    isSuccessDeleted,
    isSuccessToggledFavorite,
    name,
  ]);

  console.log('item');
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
          <IconButton
            size="small"
            aria-label="delete"
            color="primary"
            onClick={() => deleteContact(id)}
            disabled={isDeleted}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <div>
            <IconButton
              size="small"
              color="primary"
              aria-label="edit"
              onClick={toggleModal}
            >
              <CreateIcon fontSize="inherit" />
            </IconButton>
          </div>
          <IconButton
            size="small"
            aria-label="favorite"
            color="primary"
            disabled={isToggledFavorite}
            onClick={() =>
              toggleFavoriteContact({
                id: id,
                data: { favorite: !favorite },
              })
            }
          >
            {favorite ? (
              <FavoriteIcon fontSize="inherit" />
            ) : (
              <FavoriteBorderIcon fontSize="inherit" />
            )}
          </IconButton>
        </Box>
      </Paper>
      <Modal isOpen={modalIsOpen} toggleIsOpen={toggleModal}>
        <EditContactForm id={id} />
      </Modal>
    </>
  );
}
