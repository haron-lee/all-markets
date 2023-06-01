import { React } from 'react';
import styled from 'styled-components';

// ToDo: 제목 및 내용 길경우 고려

const ProductItem = ({ products }) => {
  return (
    <>
      {products &&
        products.map((item) => {
          return (
            <Card key={item.product_id}>
              <div>
                <img src={item.image} alt={item.product_info} />
              </div>
              <p className="desc">{item.store_name}</p>
              <p className="title">{item.product_name}</p>
              <p className="price">
                <strong>{item.price.toLocaleString()}</strong>원
              </p>
            </Card>
          );
        })}
    </>
  );
};

const Card = styled.li`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    max-width: 380px;
    height: 380px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    color: var(--gray);
  }

  .title {
    font-size: 18px;
  }

  .price {
    strong {
      margin-right: 2px;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

export default ProductItem;
