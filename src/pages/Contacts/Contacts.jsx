import { ContactList } from 'components/ContactList/ContactList';
import { Div } from './Contacts.styled';
//import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Link, Outlet } from 'react-router-dom';
import { Filter } from 'components/Filter/Filter';

export default function Home() {
  return (
    <Div>
      <Link to="addition">Add contacts</Link>
      <Outlet />
      <Filter></Filter>
      <ContactList></ContactList>
    </Div>
  );
}
