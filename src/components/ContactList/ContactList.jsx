import { Li, Ul } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/Redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'components/Redux/contacts/operations';
import ContactCard from 'components/ContactCard/ContactCard';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectVisibleContacts);

  return (
    <Ul>
      {contacts &&
        contacts.map(({ name, id, number }) => (
          <Li key={id}>
            <ContactCard name={name} id={id} number={number}></ContactCard>
          </Li>
        ))}
    </Ul>
  );
}
