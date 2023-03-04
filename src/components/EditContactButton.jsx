import { memo } from 'react';
import { IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const EditContactButton = ({ openModal, setContactId, id }) => {
  const handleClick = () => {
    setContactId(id);
    openModal();
  };

  return (
    <IconButton
      size="small"
      color="primary"
      aria-label="edit"
      onClick={handleClick}
    >
      <CreateIcon fontSize="inherit" />
    </IconButton>
  );
};

export default memo(EditContactButton);
