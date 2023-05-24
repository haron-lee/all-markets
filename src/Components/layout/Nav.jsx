import React from 'react';
import Logo from '../../assets/Logo-hodu.png';
import Search from '../../assets/search.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//TODO
// form submit 함수
// Link 스타일링
const Nav = () => {
  return (
    <NavWrap>
      <NavStyle>
        <LogoWrap>
          <h1>
            <img src={Logo} alt="HODU 로고" />
          </h1>
          <form>
            <input type="text" />
            <button>
              <img src={Search} alt="돋보기 모양의 검색버튼" />
            </button>
          </form>
        </LogoWrap>
        <LinkWrap>
          <LinkStyle to="/cart">장바구니</LinkStyle>
          <LinkStyle to="/login">로그인</LinkStyle>
        </LinkWrap>
      </NavStyle>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  width: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

const NavStyle = styled.nav`
  margin: auto;
  max-width: 1280px;
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 30px;
    img {
      width: 124px;
    }
  }

  form {
    display: flex;
    align-items: center;

    input {
      width: 400px;
      padding: 13px 22px;
      border: 2px solid var(--primary);
      border-radius: 50px;
    }

    button {
      margin-left: -50px;
      cursor: pointer;
      border: none;
      background: none;
      padding: 5px;
    }
  }
`;

const LinkWrap = styled.div`
  a:first-child {
    margin-right: 26px;
  }
`;

const LinkStyle = styled(Link)`
  &::before {
    content: '';
    width: 32px;
    height: 32px;
    background: url();
  }

  color: red;
`;

export default Nav;
