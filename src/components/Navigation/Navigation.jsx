//import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import AuthUser from 'components/AuthUser/AuthUser';
import { Header, NavLinks } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLogged } = useAuth();
  return (
    <Header>
      <nav>
        <NavLinks to="/">PhoneBook</NavLinks>
        {isLogged && <NavLinks to="/contacts">Contacts</NavLinks>}
      </nav>
      {isLogged ? <UserMenu /> : <AuthUser />}
    </Header>
  );
};

export default Navigation;
