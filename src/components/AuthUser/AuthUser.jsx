import { NavLinks } from './AuthUser.styled';

export default function AuthNav() {
  return (
    <div>
      <NavLinks to="/register">Registration</NavLinks>
      <NavLinks to="/login">Login</NavLinks>
    </div>
  );
}
