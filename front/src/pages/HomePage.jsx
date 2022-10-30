import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/authSelector';

export default function HomePage() {

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
  <>
      {!isLoggedIn && (
        <p style={{marginTop:"100px"}}>
          Welcome!!! to work with the application you need to register or log in
        </p>
      )}
    </>
  );
}
