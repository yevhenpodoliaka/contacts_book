import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/authSelector';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOptions';
import avatar from '../../images/avatar.png';

import { Button, Typography, Avatar, Box } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mx: 'auto' }}>
      <Typography>Welcome , {email}</Typography>
      <Avatar alt="user avatar" src={avatar} sx={{ width: '32' }} />

      <Button
        size="small"
        variant="contained"
        onClick={() => {
          dispatch(logOutUser());
        }}
      >
        Log Out
      </Button>
    </Box>
  );
}
