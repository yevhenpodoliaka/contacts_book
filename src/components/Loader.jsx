import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ isLoading =true}) => {

return (
  <Backdrop
    sx={{ color: 'black', zIndex: theme => theme.zIndex.drawer + 1 }}
    open={isLoading}
  >
    <CircularProgress />
  </Backdrop>
);
};

export default Loader;
