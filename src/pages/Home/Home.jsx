import { Section, H1 } from './Home.styled';
import foto from '../../data/foto.jpg';

export const Home = () => {
  return (
    <Section>
      <H1>Make your PhoneBook</H1>
      <div>
        <img src={foto} alt="foto" width={500}></img>
      </div>
    </Section>
  );
};
