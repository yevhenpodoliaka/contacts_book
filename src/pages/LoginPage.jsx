import LoginForm from 'components/LoginForm';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/auth/authSelector';
import Typography from '@mui/material/Typography';

export default function LoginPage() {
  const isLoading = useSelector(getIsLoading);

  return (
    <main style={{ padding: '15px', margin: '65px 0 0' }}>
      {isLoading && <Typography>Please await is Loading...</Typography>}
      <LoginForm />
    </main>
  );
}
