import { logOut } from 'components/Redux/auth/operation';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { Span } from './UserMenu.styled';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <Span>Добро пожаловать, {user.name}</Span>
      <Button
        type="button"
        onClick={handleLogOut}
        variant="outlined"
        color="error"
        size="small"
      >
        Logout
      </Button>
    </div>
  );
};
