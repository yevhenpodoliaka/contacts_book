import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/authSelector';
import { Box, Typography } from '@mui/material';
import { SiMaterialui, SiRedux, SiExpress, SiMongodb } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Box my={12}>
        {!isLoggedIn && (
          <Typography>
            Welcome!!! to work with the application you need to register or log
            in
          </Typography>
        )}
      </Box>
      <Typography variant="button" display="block">
        Tools in this app
      </Typography>
      <Box display="flex" justifyContent="space-around" marginTop="12px">
        <FaReact fontSize={40} color="#61dafb" />

        <SiRedux fontSize={40} color="#764abc" />

        <SiMaterialui fontSize={40} color="#007fff" />

        <FaNodeJs fontSize={40} color="#026e00" />

        <SiExpress fontSize={40} color="#444" />

        <SiMongodb fontSize={40} color="#116149" />
      </Box>
    </>
  );
}
