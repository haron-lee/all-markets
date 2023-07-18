import React from 'react';

import Form from 'Components/common/Form';
import SignupInput from 'Components/common/SignupInput';
import Button from 'Components/common/Button';
import { styled } from 'styled-components';

const SignupForm = () => {
  return (
    <>
      <Form $gap='12px'>
        <IdPwLayout>
          <SignupInput id='sign-id' label='아이디' />
          <SignupInput
            type='password'
            id='sign-pw'
            label='비밀번호'
            $checkIcon
          />
          <SignupInput
            type='password'
            id='sign-pw'
            label='비밀번호 재확인'
            $checkIcon
            checked={true}
          />
        </IdPwLayout>
        <SignupInput id='sign-username' label='이름' />
        <div>
          <SignupInput id='sign-first_digit' label='휴대폰번호' />
          <SignupInput id='sign-middle_digit' />
          <SignupInput id='sign-last_digit' />
        </div>
      </Form>
    </>
  );
};

const IdPwLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 50px;
`;

const PhoneNumberLayout = styled.div``;

export default SignupForm;
