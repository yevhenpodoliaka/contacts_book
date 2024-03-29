import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const TopAppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <AppBar
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          bottom: 'auto',
          display: 'flex',
          alignItems: 'center',
          mx: 'auto',
          gap: 8,
        }}
      >
        <Toolbar>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default TopAppBar;
