import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AddCont = styled(NavLink)`
  .active {
    color: red;
  }
`;

export const Div = styled.div`
  display: inline-block;
`;

export const Loaders = styled.div`
  justify-content: center;
  display: flex;
`;
