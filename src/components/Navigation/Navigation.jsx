//import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import AuthUser from 'components/AuthUser/AuthUser';
import { Header, NavLinks, Section } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLogged } = useAuth();
  return (
    <Header>
      <Section>
        <nav>
          <NavLinks to="/">PhoneBook</NavLinks>
          {isLogged && <NavLinks to="/contacts">Contacts</NavLinks>}
        </nav>
        {isLogged ? <UserMenu /> : <AuthUser />}
      </Section>
    </Header>
  );
};

export default Navigation;
