import { Button } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <Button
        component={RouterLink}
        to="/"
        variant="body2"
        sx={{ ...StyledNavLink }}
      >
        {'Home'}
      </Button>
      <Button
        component={RouterLink}
        to="/register"
        variant="body2"
        sx={{ ...StyledNavLink }}
      >
        {'Registration'}
      </Button>
      <Button
        component={RouterLink}
        to="/login"
        variant="body2"
        sx={{ ...StyledNavLink }}
      >
        {'Login'}
      </Button>
    </>
  );
}

const StyledNavLink = {
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&.active': {
    color: 'secondary.main',
  },

  '&:hover': {
    color: 'secondary.main',
  },
};
