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
              <img src={item.image} alt={item.product_info} />
              <p className="title">{item.product_name}</p>
              <p className="price">
                <strong>{item.price}</strong>원
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
