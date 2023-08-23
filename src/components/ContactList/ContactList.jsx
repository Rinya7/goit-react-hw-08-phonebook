import { Li, Ul } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/Redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'components/Redux/contacts/operations';

import ImgMediaCard from 'components/Card/Card';
import { Filter } from 'components/Filter/Filter';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectVisibleContacts);

  return (
    <Ul>
      {contacts.length > 1 && <Filter></Filter>}
      {contacts &&
        contacts.map(({ name, id, number }) => (
          <Li key={id}>
            <ImgMediaCard name={name} id={id} number={number}></ImgMediaCard>
          </Li>
        ))}
    </Ul>
  );
}
