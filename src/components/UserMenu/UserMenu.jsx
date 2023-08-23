import { logOut } from 'components/Redux/auth/operation';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <span>Добро пожаловать, {user.name}</span>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
