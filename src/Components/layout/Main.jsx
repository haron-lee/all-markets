import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../common/ProductItem';

// TODO alt값 넣기
const Main = () => {
  const [products, setProducts] = useState([]);
  const [productPageNum, setProductPageNum] = useState(0);

  // count 80, results에 상품목록
  const url = 'https://openmarket.weniv.co.kr/products';

  const getData = async () => {
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error('네트워크 응답에 문제가 있습니다.');
      }
      const productsData = await data.json();
      setProducts(productsData.results);
      let productPageNum = Math.ceil(
        productsData.count / productsData.results.length
      );
      setProductPageNum(productPageNum);
    } catch (error) {
      console.error('에러가 발생했습니다', error);
    }
  };

  // console.log 용!!
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  console.log(products);

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= productPageNum; i++) {
      pages.push(<PageNums key={i}>{i}</PageNums>);
    }
    return pages;
  };

  return (
    <MainStyle>
      <h2 className="a11y-hidden">판매 상품 목록</h2>
      <ListStyle>
        <ProductItem products={products} />
      </ListStyle>
      <PageNumsWrap>
        <div>{renderPages()}</div>
      </PageNumsWrap>
    </MainStyle>
  );
};

const MainStyle = styled.main`
  max-width: 1280px;
  margin: 80px auto;
`;

const ListStyle = styled.ul`
  display: grid;
  gap: 70px;
  grid-template-columns: repeat(3, 1fr);
`;

const PageNumsWrap = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    gap: 10px;
  }
`;

const PageNums = styled.button``;

export default Main;
