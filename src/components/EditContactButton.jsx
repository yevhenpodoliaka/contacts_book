import { IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const EditContactButton = ({ openModal, setContactId, id }) => {
  const handelClick = () => {
    setContactId(id);
    openModal();
  };

  return (
    <IconButton
      size="small"
      color="primary"
      aria-label="edit"
      onClick={handelClick}
    >
      <CreateIcon fontSize="inherit" />
    </IconButton>
  );
};

export default EditContactButton;
