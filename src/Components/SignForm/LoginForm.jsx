import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../common/Form';
import LoginInput from '../common/LoginInput';
import Button from '../common/Button';
import loginAPI from '../../api/LoginAPI';
import styled from 'styled-components';

const LoginForm = ({ loginType }) => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    login_type: loginType,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [userErrorMessage, setUserErrorMessage] = useState('');
  const [userCheck, setUserCheck] = useState(false);

  const handleTarget = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleLogin = async () => {
    try {
      const accountData = await loginAPI(userInput);
      console.log(accountData);
      return true;
    } catch (error) {
      console.error('Account API 에러가 발생했습니다', error);
      setErrorMessage(error.message);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginSuccess = await handleLogin();
    if (loginSuccess) {
      setUserCheck(true);
      // TODO: 뒤로가기 막기
      navigate('/', { state: { userCheck } }, { replace: true });
    }
  };

  const handleError = () => {
    if (userInput.username === '' && userInput.password === '') {
      setUserErrorMessage('아이디를 입력해 주세요.');
    } else if (userInput.username && userInput.password === '') {
      setUserErrorMessage('비밀번호를 입력해 주세요.');
    } else {
      setUserErrorMessage('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LoginInput
        type='text'
        placeholder='아이디'
        name='username'
        value={userInput.username}
        onChange={handleTarget}
      />
      {userErrorMessage && userInput.username === '' && (
        <ErrorStyle>{userErrorMessage}</ErrorStyle>
      )}
      <LoginInput
        type='password'
        placeholder='비밀번호'
        name='password'
        value={userInput.password}
        onChange={handleTarget}
        autoComplete='on'
      />
      {userErrorMessage && userInput.username && userInput.password === '' && (
        <ErrorStyle>{userErrorMessage}</ErrorStyle>
      )}
      {errorMessage && userInput.username && userInput.password && (
        <ErrorStyle>{errorMessage}</ErrorStyle>
      )}
      <Button type='submit' mt='36px' onClick={handleError}>
        로그인
      </Button>
    </Form>
  );
};

const ErrorStyle = styled.p`
  text-align: start;
  margin-top: 10px;
  color: var(--error);
`;

export default LoginForm;
