import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelector';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOptions';
import avatar from '../../images/avatar.png';
import { Button, Typography, Avatar, Box } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mx: 'auto',gap:8 }}>
      <Avatar alt="user avatar" src={avatar} sx={{ width: '32' }} />
      <Typography variant="overline" display="block">
        {name}
      </Typography>
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
