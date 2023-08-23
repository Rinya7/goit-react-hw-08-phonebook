import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { isLogged } = useAuth();
  return (
    <div>
      <h2>Make you PhoneBook</h2>
      {!isLogged && (
        <>
          <Link to="/register">Regestartion</Link>
          <br />
          <br />
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};
