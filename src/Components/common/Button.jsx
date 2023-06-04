import React from 'react';
import styled, { css } from 'styled-components';

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
  width: 100%;
  padding: 20px;
  color: white;
  background: ${(props) => props.bgColor || 'var(--primary)'};
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;

  // 다른방식
  /* ${(props) =>
    props.special &&
    css`
      background-color: var(--gray);
    `}; */
`;

export default Button;
