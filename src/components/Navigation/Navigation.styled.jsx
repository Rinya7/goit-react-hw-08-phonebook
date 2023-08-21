import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a363b;
  padding: 20px;
  .active {
    color: red;
  }
`;

export const NavLinks = styled(NavLink)`
  display: inline-block;
    text-decoration: none;
    padding: 12;
    font-weight: 700;
    color: #2A363B;
    margin-right: 20px;
    .active {
    color: '#E84A5F';
  },
`;
