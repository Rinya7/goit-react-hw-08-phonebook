import { logIn } from 'components/Redux/auth/operation';
import { useDispatch } from 'react-redux';
import { Form, FildInput, Label, Button, Div } from './Login.styled';

export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { email, password } = form.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(user));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
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
