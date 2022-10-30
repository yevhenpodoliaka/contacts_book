import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export default function TopAppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <AppBar
        component="nav"
        sx={{ position: 'fixed', top: 0, bottom: "auto" }}
      >
        <Toolbar>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Toolbar>
      </AppBar>
    </>
  );
}
