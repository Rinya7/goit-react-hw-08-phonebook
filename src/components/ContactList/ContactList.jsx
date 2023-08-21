import { useDispatch } from 'react-redux';
import { Ul, Li, Text } from './ContactList.styled';
//import { deleteContact } from 'components/Redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'components/Redux/operations';
export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectVisibleContacts);

  return (
    <Ul>
      {contacts &&
        contacts.map(({ name, id, phone }) => (
          <Li key={id}>
            <Text>
              {name} tel: <span> {phone}</span>
            </Text>

            <button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </Li>
        ))}
    </Ul>
  );
};
