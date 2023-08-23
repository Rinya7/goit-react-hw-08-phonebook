import {
  selectIsLogged,
  selectIsRefreshing,
  selectUser,
} from 'components/Redux/auth/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  return {
    isLogged: useSelector(selectIsLogged),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
