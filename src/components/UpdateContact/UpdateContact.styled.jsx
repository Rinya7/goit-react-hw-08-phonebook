import styled from '@emotion/styled';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  padding: 32px;
  text-align: center;
`;

export const FildInput = styled.input`
  display: block;
  width: -webkit-fill-available;
  font-size: 16px;
  padding: 8px 16px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
`;

export const Div = styled.div`
  margin: 40px 0;
`;

export const DivBtn = styled.div`
  margin: 0;
`;
