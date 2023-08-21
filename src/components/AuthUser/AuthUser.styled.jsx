import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
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
