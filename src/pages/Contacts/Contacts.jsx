import ContactList from 'components/ContactList/ContactList';
import { Div, Loaders } from './Contacts.styled';
import AddContact from 'components/AddContact/AddContact';
import { Filter } from 'components/Filter/Filter';
import {
  selectError,
  selectIsLoading,
} from 'components/Redux/contacts/selectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Div>
      <AddContact></AddContact>
      <Filter></Filter>
      <Loaders>
        {isLoading && <Loader></Loader>}
        {error && <p>{error}</p>}
      </Loaders>
      <ContactList></ContactList>
    </Div>
  );
}
