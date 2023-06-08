import React, { useState } from "react";
import styled, { css } from "styled-components";
import left from "../../assets/icons/left-arrow.svg";
import right from "../../assets/icons/right-arrow.svg";
import img1 from "../../assets/images/bgimg.001.jpeg";
import img2 from "../../assets/images/bgimg.002.jpeg";
import img3 from "../../assets/images/bgimg.003.jpeg";
import img4 from "../../assets/images/bgimg.004.jpeg";
import img5 from "../../assets/images/bgimg.005.jpeg";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <SlideWrapStyle>
        <SlideLeftBtn type="button" onClick={handlePrevious}></SlideLeftBtn>
        <SlideImgWrap>
          <img src={images[currentIndex]} alt="Slideshow" />
        </SlideImgWrap>
        <SlideRightBtn type="button" onClick={handleNext}></SlideRightBtn>
        <IndicatorContainer>
          {images.map((_, index) => {
            return (
              <Indicator
                key={index}
                bgColor={index === currentIndex}
              ></Indicator>
            );
          })}
        </IndicatorContainer>
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
  /* max-width: 1280px; */
  width: 100%;
  height: 500px;
  margin: 0 auto;

  img {
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
  border-radius: 50%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2) no-repeat center center/ 15px;
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

const IndicatorContainer = styled.div`
  margin-top: -30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100px;
  display: flex;
  gap: 10px;
`;

const Indicator = styled.div`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) => (props.bgColor ? "#727272" : "#ffffff")};
`;

export default Slide;
