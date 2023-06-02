import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import left from '../../assets/icons/icon-swiper-1.svg';
import right from '../../assets/icons/icon-swiper-2.svg';
import img1 from '../../assets/slide/1.jpeg';
import img2 from '../../assets/slide/2.jpeg';
import img3 from '../../assets/slide/3.png';
import img4 from '../../assets/slide/4.jpeg';

// 슬라이드 동그라미, 이미지 수만큼 생성되어야함

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  // for (let i = 0; i < images.length; i++) {
  //   const div = document.createElement('div');
  //   const span = document.createElement('span');
  // }

  // 두번째면 두번째의 인덱스 div에다가 classList add해서 컬러값만 바꾸게! querySelectorAll로 불러오는 것은!
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 두번째면 두번째의 인덱스 div에다가 classList add해서 컬러값만 바꾸게! querySelectorAll로 불러오는 것은!
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <SlideWrapStyle>
        <SlideLeftBtn
          $left
          type="button"
          onClick={handlePrevious}
        ></SlideLeftBtn>
        <SlideImgWrap>
          <img src={images[currentIndex]} alt="Slideshow" />
        </SlideImgWrap>
        <SlideRightBtn type="button" onClick={handleNext}></SlideRightBtn>
        <div></div>
      </SlideWrapStyle>
    </div>
  );
};

// 전체 큰 애
const SlideWrapStyle = styled.article`
  width: 100%;
  position: relative;
`;

// 이미지 덮는애
const SlideImgWrap = styled.div`
  max-width: 1280px;
  max-height: 500px;
  margin: 0 auto;

  img {
    aspect-ratio: 1280/500;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const sharedButtonStyles = css`
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  border-radius: 20px;
  padding: 20px;
  background: no-repeat center center/cover;
  cursor: pointer;
`;

const SlideLeftBtn = styled.button`
  ${sharedButtonStyles}
  left: 100px;
  background-image: url(${left});
`;

const SlideRightBtn = styled.button`
  ${sharedButtonStyles}
  right: 100px;
  background-image: url(${right});
`;

export default Slide;
