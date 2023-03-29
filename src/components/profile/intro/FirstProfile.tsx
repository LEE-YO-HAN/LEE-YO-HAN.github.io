import Image from "next/image";
import styled from "styled-components";

export const FirstProfile = () => {
  return (
    <FirstProfileWrap>
      <Image
        src={
          "https://user-images.githubusercontent.com/85297720/227774217-57222e9b-baca-493d-80a1-dfc5be3f93ed.png"
        }
        width={200}
        height={200}
        alt="profile"
        priority
      />
      <span>Yo Han (26)</span>
    </FirstProfileWrap>
  );
};

const FirstProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
  animation: ProfileFadeIn 2s ease-in-out;
  @keyframes ProfileFadeIn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  & img {
    border-radius: 50%;
  }
  & span {
    margin: 5px 0 5px 0;
    font-weight: bold;
    font-size: 1.6rem;
  }
`;
