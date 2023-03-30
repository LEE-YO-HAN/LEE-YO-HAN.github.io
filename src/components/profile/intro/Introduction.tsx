import styled from "styled-components";

export const Introduction = () => {
  return (
    <IntroductionWrap>
      <h2>Introduction</h2>
      <IntroList>
        <li>안녕하세요! 프론트엔드 개발자 Yohan입니다.</li>
        <li>
          실질적인 문제 해결에 기여한다는 매력에 이끌려 개발자의 길을 걷고
          있습니다.
        </li>
        <li>
          작은 것이라도 새롭게 배운 것은 Github나 블로그를 통해 꾸준히
          기록합니다.
        </li>
        <li>좋은 코드에 대해 끊임없이 고민하고 있습니다.</li>
        <li>개인의 성장에 많은 관심이 있습니다.</li>
      </IntroList>
    </IntroductionWrap>
  );
};

const IntroductionWrap = styled.div`
  margin: 20px 0 20px 50px;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  animation: IntroductionFadeIn 2s ease-in-out;
  @keyframes IntroductionFadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
  }
  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const IntroList = styled.ul`
  list-style: circle;
  & li {
    margin: 0 0 10px 10px;
    list-style-type: circle;
    list-style-position: inside;
  }
`;
