import React from 'react';
import styled from 'styled-components';

// TODO alt값 넣기
const Main = () => {
  return (
    <MainStyle>
      <h2 className="a11y-hidden">판매 상품 목록</h2>
      <ListStyle>
        <Card>
          <img
            src="https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg"
            alt=""
          />
          {/* TODO: 제목 및 내용 길경우 고려 */}
          <p className="desc">우당탕탕 라이캣의 실험실</p>
          <p className="title">Hack Your Life 개발자 노트북 파우치</p>
          <p className="amount">
            <strong>29,000</strong>원
          </p>
        </Card>
      </ListStyle>
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

  .amount {
    strong {
      margin-right: 2px;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

export default Main;
