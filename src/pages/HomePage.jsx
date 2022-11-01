import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/authSelector';
import { Box,Typography } from '@mui/material';

export default function HomePage() {

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
  <Box mt={12}>
      {!isLoggedIn && (
        <Typography>
          Welcome!!! to work with the application you need to register or log in
        </Typography>
      )}
    </Box>
  );
}
