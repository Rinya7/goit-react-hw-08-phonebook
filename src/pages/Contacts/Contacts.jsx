import ContactList from 'components/ContactList/ContactList';
import { Div } from './Contacts.styled';
import AddContact from 'components/AddContact/AddContact';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <Div>
      <AddContact></AddContact>
      <Filter></Filter>
      <ContactList></ContactList>
    </Div>
  );
}
