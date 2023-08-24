import { useDispatch } from 'react-redux';
import { fetchContacts, updateContact } from '../Redux/contacts/operations';
import { Form, FildInput, Label, Div } from './UpdateContact.styled';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const { useState } = require('react');

export const UpdateContact = ({ id }) => {
  const [nameNew, setNameNew] = useState('');
  const [numberNew, setNumberNew] = useState('');

  const [openNew, setOpenNew] = useState(false);
  const handleOpen = () => setOpenNew(true);
  const handleClose = () => setOpenNew(false);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setNameNew(value);
        break;
      case 'number':
        setNumberNew(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name: nameNew,
      number: numberNew,
    };
    dispatch(updateContact({ id, contact }));

    setNameNew('');
    setNumberNew('');

    handleClose();
  };

  return (
    <Div>
      <Button onClick={handleOpen} size="small">
        Edit Contact
      </Button>
      <Modal
        open={openNew}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Form onSubmit={handleSubmit} onClose={() => dispatch(fetchContacts())}>
          <h2>Edit Contact</h2>
          <Div>
            <Label htmlFor="Name">Name</Label>
            <FildInput
              type="text"
              name="name"
              value={nameNew}
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
              value={numberNew}
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
};

UpdateContact.propTypes = {
  id: PropTypes.string.isRequired,
};
