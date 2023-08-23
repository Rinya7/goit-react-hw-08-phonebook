import { logIn } from 'components/Redux/auth/operation';
import { useDispatch } from 'react-redux';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputEmail">Email address</label>
        <input name="email" type="email" id="inputEmail" placeholder="email" />
      </div>
      <div>
        <label htmlFor="inputPassword">Password</label>
        <input
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
