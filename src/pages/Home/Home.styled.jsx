import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  display: inline-block;
   text-alight: center;

    font-weight: 700;
    margin-right: 20px;
    .active {
    color: '#E84A5F';
  },
  .focus {
    color: '#E84A5F';
  },
`;

export const Section = styled.section`
  width: 650px;
  padding: 20px 15px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.02em;
`;

export const H1 = styled.h1`
  margin: 0;
`;
