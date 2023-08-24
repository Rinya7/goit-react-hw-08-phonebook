//import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../Redux/contacts/operations';
import { Form, FildInput, Label, Div } from './AddContact.styled';
import { selectVisibleContacts } from 'components/Redux/contacts/selectors';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
const { useState } = require('react');

export default function ContactsForm() {
  const contacts = useSelector(selectVisibleContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
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
          contact.number === number
      );
      if (simpleContact) {
        return alert(`${name} or ${number} is already in contacts`);
      }
    }

    const contact = {
      name: name,
      number: number,
    };
    dispatch(addContact(contact));
    setName('');
    setNumber('');
    handleClose();
  };

  return (
    <Div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="success"
        size="small"
      >
        Add contact
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Form onSubmit={handleSubmit}>
          <h2>Add contact</h2>
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
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </Div>

          <Button
            type="submit"
            variant="contained"
            color="success"
            size="small"
          >
            Add contact
          </Button>
        </Form>
      </Modal>
    </Div>
  );
}
