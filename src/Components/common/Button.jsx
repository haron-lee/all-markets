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
  display: block;
  color: white;
  background: var(--primary);
  padding: 20px;
  cursor: pointer;
`;

export default Button;
