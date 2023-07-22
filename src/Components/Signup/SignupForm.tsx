import React, { useRef, useState, useEffect, ChangeEvent } from 'react';
import { styled } from 'styled-components';
import { SignStyle } from 'Components/style/SignLayout';

import Form from 'Components/common/Form';
import SignupInput from 'Components/common/SignupInput';
import TermsOfService from './TermsOfService';
import Button from 'Components/common/Button';

type SignupFormProps = React.HTMLAttributes<HTMLFormElement> & {
  $userType?: String | undefined;
};

const SignupForm = ({ $userType, ...rest }: SignupFormProps) => {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    password2: '',
    phone_number: '',
    name: '',
  });
  const [selectBox, setSelectBox] = useState(false);
  const [selectedDigit, setSelectedDigit] = useState('010');
  const selectBoxRef = useRef<HTMLDivElement>(null);

  const handleSelectBox = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setSelectBox(!selectBox);
  };

  const handleDigitClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const selected: string | null = e.currentTarget.textContent;
    setSelectedDigit(selected || '');
    setSelectBox(false);
  };

  // NOTE : select box 바깥 클릭시 false
  const handleClickOutside = (e: MouseEvent) => {
    if (
      selectBoxRef.current &&
      !selectBoxRef.current.contains(e.target as Node)
    ) {
      setSelectBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);

    setUserInput((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  return (
    <>
      <SignStyle>
        <Form $gap='12px'>
          <IdPwLayout>
            <SignupInput
              id='sign-id'
              label='아이디'
              $star
              value={userInput.username}
              onChange={handleUserInput}
            />
            <SignupInput
              type='password'
              id='sign-pw'
              label='비밀번호'
              $checkIcon
              $star
              value={userInput.password}
            />
            <SignupInput
              type='password'
              id='sign-reconfirm'
              label='비밀번호 재확인'
              $checkIcon
              $checked={true}
              $star
              value={userInput.password2}
            />
          </IdPwLayout>
          <SignupInput id='sign-username' label='이름' $star />
          <PhoneNumberLayout ref={selectBoxRef}>
            <SignupInput
              type='button'
              onClick={handleSelectBox}
              value={selectedDigit}
              label='휴대폰번호'
              $arrow
              $up={selectBox}
              $star
            />
            {selectBox && (
              <PhoneSelectBox>
                <li onClick={handleDigitClick}>010</li>
                <li onClick={handleDigitClick}>011</li>
                <li onClick={handleDigitClick}>016</li>
                <li onClick={handleDigitClick}>017</li>
                <li onClick={handleDigitClick}>018</li>
              </PhoneSelectBox>
            )}
            <SignupInput id='sign-middle_digit' />
            <SignupInput id='sign-last_digit' />
          </PhoneNumberLayout>
          <EmailLayout>
            <label htmlFor='sign-email_id'>이메일</label>
            <EmailInfoLayout>
              <SignupInput id='sign-email_id' />
              <span>@</span>
              <SignupInput id='sign-email' />
            </EmailInfoLayout>
          </EmailLayout>
        </Form>
      </SignStyle>
      <TermsOfService />
      <Button>가입하기</Button>
    </>
  );
};

const IdPwLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 50px;
`;

const PhoneNumberLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
`;

const PhoneSelectBox = styled.ul`
  position: absolute;
  left: 0;
  width: 151px;
  height: 150px;
  margin-bottom: -160px;
  overflow: auto;
  border: 1px solid var(--border);
  border-radius: 5px;
  background-color: #fff;

  li {
    padding: 10px;
    text-align: center;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: var(--footer-bg);
    }
  }
`;

const EmailLayout = styled.div`
  text-align: start;

  label:first-child {
    color: var(--gray);
  }
`;

const EmailInfoLayout = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 10px;
    color: var(--gray);
  }
`;

export default SignupForm;
