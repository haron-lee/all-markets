import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Logo from '../../assets/icons/Logo-hodu.png';
import Search from '../../assets/icons/search.svg';
import Cart from '../../assets/icons/icon-shopping-cart.svg';
import Cart2 from '../../assets/icons/icon-shopping-cart-2.svg';
import User from '../../assets/icons/icon-user.svg';
import User2 from '../../assets/icons/icon-user-2.svg';
import Shopping from '../../assets/icons/icon-shopping-bag.svg';

//TODO
// form submit 함수
const Nav = ({ userCheck, type }) => {
  const [dropbox, setDropbox] = useState(false);

  const handleDropbox = () => {
    setDropbox(!dropbox);
  };

  return (
    <NavWrap>
      <NavStyle>
        <LogoWrap>
          <h1>
            <Link to='/'>
              <img src={Logo} alt='HODU 로고' />
            </Link>
          </h1>
          <form>
            <input type='text' />
            <button>
              <img src={Search} alt='돋보기 모양의 검색버튼' />
            </button>
          </form>
        </LogoWrap>
        {userCheck && type === 'BUYER' && (
          <LinkWrap>
            <LinkStyle to='/cart'>장바구니</LinkStyle>
            <MypageStyle onClick={handleDropbox}>마이페이지</MypageStyle>
            {dropbox && <Dropdown ml='47px' />}
          </LinkWrap>
        )}
        {userCheck && type === 'SELLER' && (
          <LinkWrap>
            <MypageStyle onClick={handleDropbox}>마이페이지</MypageStyle>
            <SellerBox to='/seller'>판매자 센터</SellerBox>
            {dropbox && <Dropdown ml='-38px' />}
          </LinkWrap>
        )}
        {!userCheck && !type && (
          <LinkWrap>
            <LinkStyle to='/cart'>장바구니</LinkStyle>
            <LinkStyle2 to='/login'>로그인</LinkStyle2>
          </LinkWrap>
        )}
      </NavStyle>
    </NavWrap>
  );
};

const Dropdown = (props) => {
  return (
    <Dropbox {...props}>
      <button>마이페이지</button>
      <button>로그아웃</button>
    </Dropbox>
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
  position: relative;
  display: flex;
  gap: 26px;
`;

const LinkStyle = styled(Link)`
  color: var(--gray);
  transition: all 0.2s;
  font-size: 12px;

  &::before {
    content: '';
    display: block;
    margin: auto;
    margin-bottom: 4px;
    width: 32px;
    height: 32px;
    background: url(${Cart}) no-repeat center center;
    transition: all 0.2s;
  }

  &:hover {
    color: var(--primary);
  }

  &:hover::before {
    background: url(${Cart2}) no-repeat center center;
  }
`;

const LinkStyle2 = styled(LinkStyle)`
  &::before {
    background: url(${User}) no-repeat center center;
  }

  &:hover::before {
    background: url(${User2}) no-repeat center center;
  }
`;

const MypageStyle = styled.button`
  color: var(--gray);
  transition: all 0.2s;
  font-size: 12px;

  &::before {
    content: '';
    display: block;
    margin: auto;
    margin-bottom: 4px;
    width: 32px;
    height: 32px;
    background: url(${User}) no-repeat center center;
    transition: all 0.2s;
  }

  &:hover {
    color: var(--primary);
  }

  &:hover::before {
    background: url(${User2}) no-repeat center center;
  }
`;

const SellerBox = styled(Link)`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  font-size: 18px;
  background-color: var(--primary);
  border-radius: 5px;
  color: #fff;

  &::before {
    content: '';
    display: inline-block;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    background: url(${Shopping}) no-repeat left;
  }
`;

const Dropbox = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: ${(props) => props.ml};
  margin-bottom: -110px;
  max-width: 130px;
  padding: 10px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);

  button {
    display: block;
    margin: 0 auto;
    width: 110px;
    padding: 10px 0;
    text-align: center;
    box-sizing: border-box;
    font-size: 16px;
    color: var(--gray);

    &:hover {
      color: #000;
      outline: 1px solid var(--gray);
      border-radius: 5px;
    }
  }

  button:first-child {
    margin-bottom: 5px;
  }
`;

export default Nav;
