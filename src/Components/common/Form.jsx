import React from 'react';
import styled from 'styled-components';

const Form = (props) => {
  return <FormStyle {...props}>{props.children}</FormStyle>;
};

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default Form;
