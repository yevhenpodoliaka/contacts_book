import * as React from 'react';
import { IconButton, Dialog} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';


const Modal = ({ children, isOpen,closeModal, setContactId }) => {
  const onClose = () => {
    setContactId(null);
    closeModal();
  };
  return (
    <Dialog open={isOpen} onClose={onClose} >
      <IconButton
        sx={{ width: '25px', height: '25px' }}
        color="inherit"
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
};

export default Modal;
