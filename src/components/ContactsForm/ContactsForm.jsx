import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../Redux/operations';

import { Form, FildInput, Label, Button, Div } from './ContactsForm.styled';
import { selectVisibleContacts } from 'components/Redux/selectors';
const { useState } = require('react');

export function ContactsForm() {
  const contacts = useSelector(selectVisibleContacts);
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts) {
      const simpleContact = contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
          contact.phone === phone
      );
      if (simpleContact) {
        return alert(`${name} or ${phone} is already in contacts`);
      }
    }

    const contact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Label htmlFor="Name">Name</Label>
        <FildInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Div>
      <Div>
        <Label htmlFor="Number">Number</Label>
        <FildInput
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Div>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
