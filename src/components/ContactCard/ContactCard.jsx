import * as React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  //updateContact,
} from 'components/Redux/contacts/operations';
import foto from '../../data/foto.jpg';
import { UpdateContact } from 'components/UpdateContact/UpdateContact';
import { Div } from './ContactCard.styled';

export default function ContactCard({ name, id, number }) {
  const dispatch = useDispatch();

  return (
    <>
      {/*<UpdateContact></UpdateContact>*/}
      <Card sx={{ maxWidth: 345 }} variant="outlined">
        <CardContent>
          <img src={foto} alt="foto" width={313}></img>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {number}
          </Typography>
        </CardContent>
        <Div>
          <UpdateContact id={id}></UpdateContact>

          <Button
            size="small"
            color="error"
            onClick={() => dispatch(deleteContact(id))}
          >
            {' '}
            delete
          </Button>
        </Div>
      </Card>
    </>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
