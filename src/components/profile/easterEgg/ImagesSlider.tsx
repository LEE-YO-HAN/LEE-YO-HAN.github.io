import styled from "styled-components";
import Image from "next/image";
import { useState, useRef } from "react";

export const ImagesSlider = () => {
  const imageTransition = useRef(0.3);
  const [imageIndex, setImageIndex] = useState(-0);
  const imageArr = ["eatjs", "jseatme", "kindreact", "ts", "eatjs"];
  const imageHandler = () => {
    imageTransition.current = 0.3;
    setImageIndex(prev => prev - 100);
    if (imageIndex === -300) {
      setTimeout(() => {
        imageTransition.current = 0;
        setImageIndex(0);
      }, 300);
    }
  };
  return (
    <>
      <ImageSlider>
        {imageArr.map((item, index) => {
          return (
            <Image
              key={index}
              src={`/images/eastereggs/${item}.png`}
              width={100}
              height={100}
              alt="eggs"
              style={{
                transform: `translateX(${imageIndex}%)`,
                transition: `${imageTransition.current}s`,
              }}
            />
          );
        })}
      </ImageSlider>
      <ClickMe onClick={imageHandler}>Click Me!</ClickMe>
    </>
  );
};

const ImageSlider = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 20px;
`;
const ClickMe = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 20px;
  color: transparent;
  transition: 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #8080805c;
  }
`;
