//import { Input } from '@chakra-ui/react';
import { signUp } from 'components/Redux/auth/operation';
import { useDispatch } from 'react-redux';
import { Form, FildInput, Label, Button, Div } from './Register.styled';

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { name, email, password } = form.elements;
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(signUp(newUser));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Label htmlFor="inputName">Name</Label>
        <FildInput name="name" type="text" placeholder="name" id="inputName" />
      </Div>
      <Div>
        <Label htmlFor="inputEmail">Email address</Label>
        <FildInput
          name="email"
          type="email"
          id="inputEmail"
          placeholder="email"
        />
      </Div>
      <Div>
        <Label htmlFor="inputPassword">Password</Label>
        <FildInput
          name="password"
          type="password"
          id="inputPassword"
          placeholder="password"
        />
      </Div>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
