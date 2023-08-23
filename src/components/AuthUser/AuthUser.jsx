import { NavLinks } from './AuthUser.styled';

export default function AuthNav() {
  return (
    <div>
      <NavLinks to="/register">Регистрация</NavLinks>
      <NavLinks to="/login">Логин</NavLinks>
    </div>
  );
}
