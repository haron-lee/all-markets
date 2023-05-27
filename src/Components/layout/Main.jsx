import { React, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProductItem from '../common/ProductItem';

// TODO alt값 넣기
const Main = () => {
  const [products, setProducts] = useState([]);
  const [productPageNum, setProductPageNum] = useState(0);
  const listRef = useRef(null);

  // count 80, results에 상품목록
  const url = 'https://openmarket.weniv.co.kr/products';

  const getData = async (page) => {
    try {
      const data = await fetch(`${url}?page=${page}`);
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
    getData(1);
  }, []);

  console.log(products);

  const handlePageClick = (page) => {
    getData(page);
    listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= productPageNum; i++) {
      pages.push(
        <PageNums key={i} onClick={() => handlePageClick(i)}>
          {i}
        </PageNums>
      );
    }
    return pages;
  };

  useEffect(() => {
    listRef.current.scrollTop = 0;
  }, [products]);

  return (
    <MainStyle>
      <h2 className="a11y-hidden">판매 상품 목록</h2>
      <ListStyle ref={listRef}>
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
  scroll-margin-top: 70px;
  overflow-anchor: none;
`;

const PageNumsWrap = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-shrink: 0;
    gap: 10px;
  }
`;

const PageNums = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 18px;
`;

export default Main;
