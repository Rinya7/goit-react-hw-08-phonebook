import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLogged, isRefreshing } = useAuth();
  const shouldRiderect = !isLogged && !isRefreshing;
  return shouldRiderect ? <Navigate to={redirectTo} /> : <Component />;
};
