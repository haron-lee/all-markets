import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { SignLayout, SignStyle } from 'Components/style/SignLayout';
import UserButton from 'Components/common/UserButton';
import SignupForm from 'Components/SignForm/SignupForm';

import Logo from '../assets/icons/Logo-hodu.png';

const Signup = () => {
  return (
    <>
      <SignLayout>
        <h1>
          <Link to='/'>
            <img src={Logo} alt='HODU 로고' />
          </Link>
        </h1>
        <UserTypeLayout>
          <li>
            <UserButton>구매회원가입</UserButton>
          </li>
          <li>
            <UserButton>판매회원가입</UserButton>
          </li>
        </UserTypeLayout>
        <SignStyle>
          <h2 className='a11y-hidden'>회원가입</h2>
          <SignupForm />
        </SignStyle>
      </SignLayout>
    </>
  );
};

const UserTypeLayout = styled.ul`
  li {
    display: inline-block;
  }
`;

export default Signup;
