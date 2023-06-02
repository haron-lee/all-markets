import React from 'react';
import Logo from '../assets/icons/Logo-hodu.png';
import LoginForm from '../Components/SignForm/LoginForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>
        <Link to="/">
          <img src={Logo} alt="HODU 로고" />
        </Link>
      </h1>
      <LoginWrap>
        <h2 className="a11y-hidden">로그인</h2>
        <LoginForm />
      </LoginWrap>
    </>
  );
};

const LoginWrap = styled.div`
  max-width: 550px;
`;

export default Login;
