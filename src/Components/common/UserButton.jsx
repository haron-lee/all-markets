import React from 'react';
import styled from 'styled-components';

const UserButton = (props) => {
  const { type } = props;
  return (
    <UserButtonStyle type={type ? type : 'button'} {...props}>
      {props.children}
    </UserButtonStyle>
  );
};

const UserButtonStyle = styled.button`
  display: block;
  width: 275px;
  padding: 20px 0 24px 0;
  flex-grow: 1;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid var(--border);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : 'none'};
  border-right: ${(props) =>
    props.borderRight ? 'none' : '1px solid var(--border)'};
  border-left: ${(props) =>
    props.borderLeft ? 'none' : '1px solid var(--border)'};
  background-color: ${(props) => (props.bgColor ? 'white' : '#f2f2f2')};
  z-index: ${(props) => (props.zIdx ? 9999 : 'auto')};
  position: relative;
`;

export default UserButton;
