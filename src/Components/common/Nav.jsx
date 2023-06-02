import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/Logo-hodu.png';
import Search from '../../assets/icons/search.svg';
import Cart from '../../assets/icons/icon-shopping-cart.svg';
import User from '../../assets/icons/icon-user.svg';

//TODO
// form submit 함수
const Nav = () => {
  return (
    <NavWrap>
      <NavStyle>
        <LogoWrap>
          <h1>
            <Link to="/">
              <img src={Logo} alt="HODU 로고" />
            </Link>
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
          <LinkStyle2 to="/login">로그인</LinkStyle2>
        </LinkWrap>
      </NavStyle>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  width: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 9999;
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
  display: flex;
  gap: 26px;
`;

const LinkStyle = styled(Link)`
  color: var(--gray);

  &::before {
    content: '';
    display: block;
    margin: auto;
    margin-bottom: 4px;
    width: 32px;
    height: 32px;
    background: url(${Cart}) no-repeat center center;
  }
`;

const LinkStyle2 = styled(LinkStyle)`
  &::before {
    background: url(${User}) no-repeat center center;
  }
`;

export default Nav;
