import React from 'react';
import styled from 'styled-components';
import plus from '../../assets/icons/icon-plus-line.svg';
import minus from '../../assets/icons/icon-minus-line.svg';

const ProductCount = ({ count, setCount }) => {
  const increaseCount = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <CountStyle>
      <button type="button" onClick={decreaseCount}></button>
      <input type="number" value={count} readOnly />
      <button type="button" onClick={increaseCount}></button>
    </CountStyle>
  );
};

const CountStyle = styled.div`
  display: flex;

  input,
  button {
    width: 50px;
    height: 50px;
    border: 1px solid var(--border);
  }

  input {
    text-align: center;
    font-size: 18px;
  }

  button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: url(${minus}) center center no-repeat;
  }

  button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: url(${plus}) center center no-repeat;
  }
`;

export default ProductCount;
