import styled from "styled-components";
import { BsStar } from "react-icons/bs";

export const IntroHeader = () => {
  return (
    <IntroHeaderWrap>
      <SpinningStar>
        <BsStar className="star2" />
      </SpinningStar>
      Welcome To My Profile{" "}
      <SpinningStar>
        <BsStar />
      </SpinningStar>
    </IntroHeaderWrap>
  );
};

const IntroHeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

const SpinningStar = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinningStar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spinningStar2 {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  & svg {
    animation: spinningStar 1.5s infinite ease-in-out;
  }
  & .star2 {
    animation: spinningStar2 1.5s infinite ease-in-out;
  }
`;
