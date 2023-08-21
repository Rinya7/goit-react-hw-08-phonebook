//import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthUser from 'components/AuthUser/AuthUser';
import { Header, NavLinks } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = true;
  return (
    <Header>
      <nav>
        <NavLinks to="/">PhoneBook</NavLinks>
        {isLoggedIn && (
          <>
            <NavLinks to="/contacts">Contacts</NavLinks>
            <NavLinks to="/addcontacts">Add contacts</NavLinks>
          </>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthUser />}
    </Header>
  );
};

export default Navigation;
