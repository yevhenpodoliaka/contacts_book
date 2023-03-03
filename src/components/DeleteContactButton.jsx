import { useEffect } from 'react';
import toast from 'react-hot-toast';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactMutation } from '../redux/phoneBook/phoneBookApi';

const DeleteContactButton = ({ id, name }) => {
  const [
    deleteContact,
    {
      isSuccess: isSuccessDeleted,
      error: isErrorDeleted,
      isLoading: isDeleted,
    },
  ] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccessDeleted) {
      toast.success(`contact ${name} is deleted`);
    }

    if (isErrorDeleted) {
      toast.error(`an error occurred while deleting a contact${name}`);
    }
  }, [isErrorDeleted, isSuccessDeleted, name]);
  return (
    <IconButton
      size="small"
      aria-label="delete"
      color="primary"
      onClick={() => deleteContact(id)}
      disabled={isDeleted}
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
};

export default DeleteContactButton;
