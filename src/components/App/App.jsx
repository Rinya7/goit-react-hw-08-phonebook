import { Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Container } from './App.styled';
import { Home } from 'pages/Home/Home';
import Contacts from '../../pages/Contacts/Contacts';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
//import { ContactsForm } from 'components/ContactsForm/ContactsForm';

export function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="contacts" element={<Contacts />}>
          <Route exact path="addition" element={<ContactsForm />}></Route>
        </Route>
        <Route exact path="login" element={<Login />}></Route>
        <Route exact path="register" element={<Register />}></Route>
      </Routes>
    </Container>
  );
}
