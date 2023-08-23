import { Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Container } from './App.styled';
import { Home } from 'pages/Home/Home';
import Contacts from '../../pages/Contacts/Contacts';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'components/Redux/auth/operation';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Container>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          exact
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          exact
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/" />}
        >
          {/*<Route exact path="addition" element={<ContactsForm />}></Route>*/}
        </Route>
      </Routes>
    </Container>
  );
};
