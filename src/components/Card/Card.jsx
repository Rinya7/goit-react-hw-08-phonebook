import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/Redux/contacts/operations';
import foto from '../../data/foto.jpg';

export default function ImgMediaCard({ name, id, number }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <img src={foto} alt="foto" width={345}></img>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {number}
        </Typography>
      </CardContent>
      <div>
        <Button size="small">edite</Button>
        <Button size="small" onClick={() => dispatch(deleteContact(id))}>
          delete
        </Button>
      </div>
    </Card>
  );
}
