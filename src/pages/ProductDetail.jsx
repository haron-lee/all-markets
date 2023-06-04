import React, { useState } from 'react';
import Nav from '../Components/common/Nav';
import Footer from '../Components/layout/Footer';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProductCount from '../Components/common/ProductCount';
import Button from '../Components/common/Button';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [count, setCount] = useState(1);

  if (!product) {
    return <h1>상품이 없습니다.</h1>;
  }

  return (
    <>
      <header>
        <Nav />
      </header>
      <DetailContainer>
        <h1 className="a11y-hidden">상품 상세페이지</h1>
        <ImgContainer>
          <img src={product.image} alt={product.product_name} />
        </ImgContainer>
        <DetailWrap>
          <DetailTitle>
            <InfoPStyle>{product.store_name}</InfoPStyle>
            <h2>{product.product_name}</h2>
            <InfoPStyle>
              <strong>{product.price.toLocaleString()}</strong>원
            </InfoPStyle>
          </DetailTitle>
          <div>
            <DetailInfo>
              <InfoPStyle fontSize="16px">택배배송 / 무료배송</InfoPStyle>
              <ProductCount count={count} setCount={setCount} />
            </DetailInfo>
            <ProductPrice>
              <span>총 상품 금액</span>
              <div>
                <span>
                  총 수량 <strong>{count}</strong>개
                </span>
                <span>
                  <strong>{(product.price * count).toLocaleString()}</strong>원
                </span>
              </div>
            </ProductPrice>
            <BtnContainer>
              <Button>바로 구매</Button>
              <Button bgColor="var(--gray)">장바구니</Button>
            </BtnContainer>
          </div>
        </DetailWrap>
      </DetailContainer>
      <Footer />
    </>
  );
};

// p 재사용 스타일컴포넌트
const InfoPStyle = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  color: var(--gray);

  strong {
    color: black;
  }
`;

const DetailContainer = styled.main`
  max-width: 1280px;
  margin: 80px auto;
  display: flex;
  gap: 50px;
`;

const ImgContainer = styled.div`
  width: 600px;
  height: 600px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailTitle = styled.div`
  margin-bottom: 141px;

  p:first-child {
    margin-bottom: 16px;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  p:last-child {
    font-size: 18px;

    strong {
      font-size: 36px;
      font-weight: 700;
      margin-right: 2px;
    }
  }
`;

const DetailInfo = styled.div`
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 36px;

  p {
    padding-bottom: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--border);
  }
`;

const ProductPrice = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 18px;
  }

  div {
    position: relative;
    vertical-align: bottom;

    span:first-child {
      margin-right: 12px;
      color: var(--gray);
      padding-right: 11px;
      border-right: 1px solid var(--border);

      strong {
        color: var(--primary);
        font-weight: 700;
      }
    }

    span:nth-child(2) {
      color: var(--primary);

      strong {
        font-size: 36px;
        font-weight: 700;
        margin-right: 2px;
      }
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  button:last-child {
    flex-basis: 45%;
  }
`;

export default ProductDetail;
