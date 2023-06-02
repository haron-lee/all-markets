import React from 'react';
import Nav from '../Components/common/Nav';
import Footer from '../Components/layout/Footer';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  console.log(location);
  console.log(product);

  if (!product) {
    return <h1>상품이 없습니다.</h1>;
  }

  return (
    <>
      <Nav />
      <DetailWrap>
        <h1 className="a11y-hidden">상품 상세페이지</h1>
        <img src={product.image} alt={product.product_name} />
        <div>
          <div>
            <p>{product.product_name}</p>
          </div>
        </div>
      </DetailWrap>
      <Footer />
    </>
  );
};

const DetailWrap = styled.div`
  max-width: 1280px;
  margin: 80px auto;
`;

export default ProductDetail;
