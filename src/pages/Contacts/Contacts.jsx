import ContactList from 'components/ContactList/ContactList';
import { Div } from './Contacts.styled';
import ContactsForm from 'components/ContactsForm/ContactsForm';

export default function Home() {
  return (
    <Div>
      <ContactsForm></ContactsForm>
      <ContactList></ContactList>
    </Div>
  );
}
