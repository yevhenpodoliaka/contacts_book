import * as React from 'react';
import { IconButton, Dialog, Slide } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ children, isOpen, toggleIsOpen, setContactId }) => {
  const onClose = () => {
    setContactId(null);
    toggleIsOpen();
  };
  return (
    <Dialog open={isOpen} onClose={onClose} TransitionComponent={Transition}>
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
