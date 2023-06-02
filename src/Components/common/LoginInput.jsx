import React from 'react';
import styled from 'styled-components';

const LoginInput = (props) => {
  const { type } = props;
  return <InputStyle type={type ? type : 'text'} {...props} />;
};

const InputStyle = styled.input`
  padding: 20px 10px;
  border-bottom: 1px solid var(--border);
`;

export default LoginInput;
