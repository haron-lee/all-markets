import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../common/Form';
import LoginInput from '../common/LoginInput';
import Button from '../common/Button';
import loginAPI from '../../api/LoginAPI';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    login_type: 'BUYER',
  });
  const [errorMessage, setErrorMessage] = useState('');
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
      navigate('/', { state: { userCheck } });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="login-id" className="a11y-hidden"></label>
      <LoginInput
        type="text"
        placeholder="아이디"
        id="login-id"
        name="username"
        value={userInput.username}
        onChange={handleTarget}
      />
      <label htmlFor="login-pw" className="a11y-hidden"></label>
      <LoginInput
        type="password"
        placeholder="비밀번호"
        id="login-pw"
        name="password"
        value={userInput.password}
        onChange={handleTarget}
        autoComplete="on"
      />
      {errorMessage && <p>{errorMessage}</p>}
      <Button type="submit">로그인</Button>
    </Form>
  );
};

export default LoginForm;
