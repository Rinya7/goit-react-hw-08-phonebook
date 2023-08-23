import { Input } from '@chakra-ui/react';
import { signUp } from 'components/Redux/auth/operation';
import { useDispatch } from 'react-redux';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputName">Name</label>
        <Input name="name" type="text" placeholder="name" id="inputName" />
      </div>
      <div>
        <label htmlFor="inputEmail">Email address</label>
        <Input name="email" type="email" id="inputEmail" placeholder="email" />
      </div>
      <div>
        <label htmlFor="inputPassword">Password</label>
        <Input
          name="password"
          type="password"
          id="inputPassword"
          placeholder="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
