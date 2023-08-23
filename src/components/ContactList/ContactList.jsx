//import { useDispatch } from 'react-redux';
import { Ul, Li, Text } from './ContactList.styled';
//import { deleteContact } from 'components/Redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/Redux/contacts/selectors';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from 'components/Redux/contacts/operations';
export const ContactList = () => {
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
            <Text>
              {name} tel: <span> {number}</span>
            </Text>

            <button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
            <button
              type="button"
              name="delete"
              //  onClick={() => dispatch(deleteContact(id))}
            >
              Edite
            </button>
          </Li>
        ))}
    </Ul>
  );
};
