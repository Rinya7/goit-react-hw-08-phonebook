import { Route, Routes } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';

import { Container } from './App.styled';

import Home from 'components/Home/Home';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';

export function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contacts" element={<ContactList />}></Route>
        <Route exact path="/addcontacts" element={<ContactsForm />}></Route>
      </Routes>
    </Container>
  );
}
