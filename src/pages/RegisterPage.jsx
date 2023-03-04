import RegisterForm from 'components/RegisterForm';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/auth/authSelector';
import Loader from 'components/Loader';

export default function RegisterPage() {
  const isLoading = useSelector(getIsLoading);
  return (
    <main style={{ padding: '15px', margin: '65px 0 0' }}>
      {isLoading && <Loader isLoading={isLoading} />}

      <RegisterForm />
    </main>
  );
}
