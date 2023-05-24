import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { type } = props;
  return (
    <BtnStyle type={type ? type : 'button'} {...props}>
      {props.children}
    </BtnStyle>
  );
};

const BtnStyle = styled.button`
  color: white;
  background: orangered;
  padding: 10px 20px;
`;

export default Button;
