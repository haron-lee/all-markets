import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/Logo-hodu.png';
import LoginForm from '../Components/SignForm/LoginForm';
import UserButton from '../Components/common/UserButton';

const Login = () => {
  const [loginType, setLoginType] = useState('BUYER');

  const handleLoginType = (e) => {
    const target = e.target.textContent;
    if (target === '구매회원 로그인') {
      setLoginType('BUYER');
    } else {
      setLoginType('SELLER');
    }
  };

  console.log(loginType);

  return (
    <div>
      <LoginLayout>
        <h1>
          <Link to='/'>
            <img src={Logo} alt='HODU 로고' />
          </Link>
        </h1>
        <UserButtonStyle>
          <li>
            <UserButton
              loginType={loginType}
              bgColor={loginType === 'BUYER'}
              onClick={handleLoginType}
              borderRight={loginType === 'BUYER'}
              zIdx={loginType === 'BUYER'}
            >
              구매회원 로그인
            </UserButton>
          </li>
          <li>
            <UserButton
              loginType={loginType}
              bgColor={loginType === 'SELLER'}
              onClick={handleLoginType}
              borderLeft={loginType === 'SELLER'}
              zIdx={loginType === 'SELLER'}
            >
              판매회원 로그인
            </UserButton>
          </li>
        </UserButtonStyle>
        <LoginStyle>
          <h2 className='a11y-hidden'>로그인</h2>
          <LoginForm loginType={loginType} />
        </LoginStyle>
        <div>
          <LinkStyle to='/signup'>회원가입</LinkStyle>
          <Link to='/'>비밀번호 찾기</Link>
        </div>
      </LoginLayout>
    </div>
  );
};

const LoginLayout = styled.div`
  max-width: 550px;
  margin: 100px auto;
  text-align: center;

  h1 {
    margin-bottom: 70px;
  }
`;

const UserButtonStyle = styled.ul`
  li {
    display: inline-block;
  }
`;

const LoginStyle = styled.div`
  position: relative;
  margin-top: -8px;
  margin-bottom: 30px;
  padding: 35px;
  background-color: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
`;

const LinkStyle = styled(Link)`
  &::after {
    content: '';
    display: inline-block;
    margin: 0 10px -5px 10px;
    width: 1px;
    height: 20px;
    background-color: #000;
  }
`;

export default Login;
