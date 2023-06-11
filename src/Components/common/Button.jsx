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
  display: inline-block;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: ${(props) => props.padding || '20px'};
  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.bgColor || 'var(--primary)'};
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  border: ${(props) => props.border || 'none'};
  margin-top: ${(props) => (props.mt ? props.mt : '0px')};

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--border);
    `};

  ${(props) =>
    props.noCursor &&
    css`
      cursor: default;
    `}
`;

export default Button;
