import { React, useState, useEffect, useRef } from 'react';
import getProducts from '../../api/products';
import styled from 'styled-components';
import ProductItem from '../ProductItems/ProductItem';

// TODO alt값 넣기
const Main = () => {
  const [products, setProducts] = useState([]);
  const [productPageNum, setProductPageNum] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const listRef = useRef(null);

  useEffect(() => {
    getProducts(productPageNum).then((res) => {
      setProducts(res.results);
      let productPageNum = Math.ceil(res.count / 15);
      setPageNum(productPageNum);
    });
    // getData(1);
  }, [productPageNum]);

  console.log(products);

  const handlePageClick = (page) => {
    setProductPageNum(page);
    listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // pagination 번호
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= pageNum; i++) {
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
      <FilterStyle>
        <button type="button" disabled>
          최신등록순
        </button>
        <button type="button" disabled>
          인기도순
        </button>
      </FilterStyle>
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
  margin: 60px auto;
`;

const FilterStyle = styled.div`
  position: relative;
  max-width: 200px;
  margin: 0 0 40px auto;
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    font-size: 18px;
  }

  button:first-child {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 54%;
      transform: translate(-50%, -50%);
      width: 1px;
      height: 16px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  button:last-child {
  }
`;

const ListStyle = styled.ul`
  display: grid;
  gap: 70px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
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
