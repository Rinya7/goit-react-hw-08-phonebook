import { Footers, Section, Span } from './Footer.styled';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Footer = () => {
  return (
    <Footers>
      <Section>
        <ContactPhoneIcon></ContactPhoneIcon>
        <Span>Be always connected</Span>
      </Section>
    </Footers>
  );
};
