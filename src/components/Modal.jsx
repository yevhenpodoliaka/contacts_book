import * as React from 'react';
import { IconButton, Dialog, Slide } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function Modal({children ,isOpen,toggleIsOpen}) {

  return (
    <Dialog
      open={isOpen}
      onClose={toggleIsOpen}
      TransitionComponent={Transition}
    >
      <IconButton
        sx={{ width: '25px', height: '25px' }}
        color="inherit"
        onClick={toggleIsOpen}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
}