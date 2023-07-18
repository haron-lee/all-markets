import React from 'react';
import { css, styled } from 'styled-components';
import checkOff from '../../assets/icons/icon-check-off.svg';
import checkOn from '../../assets/icons/icon-check-on.svg';

type SignupInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'password' | 'tel' | undefined;
  label?: string;
  checked?: boolean;
  $checkIcon?: boolean;
};

const SignupInput = (props: SignupInputProps) => {
  const { type, label, ...rest } = props;
  return (
    <>
      <SignupLabelStyle>
        {label}
        <SignupInputStyle type={type} {...rest} />
      </SignupLabelStyle>
    </>
  );
};

const SignupLabelStyle = styled.label`
  font-size: 16px;
  color: var(--gray);
`;

const SignupInputStyle = styled.input<SignupInputProps>`
  display: block;
  margin-top: 10px;
  width: 100%;
  padding: 17px;
  border: 1px solid var(--border);
  border-radius: 5px;
  font-size: 16px;
  background-image: ${(props) =>
    props.$checkIcon
      ? props.checked
        ? `url(${checkOn})`
        : `url(${checkOff})`
      : 'none'};
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 28px;
`;

export default SignupInput;
