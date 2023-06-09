import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  const { type } = props;
  return (
    <BtnStyle type={type ? type : "button"} {...props}>
      {props.children}
    </BtnStyle>
  );
};

const BtnStyle = styled.button`
  display: block;
  width: 100%;
  padding: 20px;
  color: white;
  background: ${(props) => props.bgColor || "var(--primary)"};
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;

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
