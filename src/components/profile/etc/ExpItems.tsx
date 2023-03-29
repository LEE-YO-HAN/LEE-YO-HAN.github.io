import Link from "next/link";
import styled from "styled-components";

export const NowItem = () => {
  return (
    <Content>
      <h2>Now Doing</h2>
      <p>개인 프로젝트</p>
      <li>
        <Link href={"https://lee-yo-han.github.io/"} target={"_blank"}>
          GITHUB Blog 제작
        </Link>
      </li>
      <li>
        <Link href={"https://github.com/ToyCode-org/ToyCode"} target={"_blank"}>
          ToyCode - 간단한 기능 복습
        </Link>
      </li>
      <li>
        <Link
          href={"https://github.com/ToyCode-org/optional-React-Redux-snippet"}
          target={"_blank"}
        >
          코드스니펫 제작 - 반복되는 코드를 최소화하기 위한 간단한 스니펫 제작
        </Link>
      </li>
    </Content>
  );
};

export const WantedItem = () => {
  return (
    <Content>
      <h2>원티드 프리온보딩 인턴십</h2>
      <p>2022.12.19 - 2023.01.20(4주)</p>
      <li>
        <Link
          href={"https://github.com/LEE-YO-HAN/week4-project"}
          target={"_blank"}
        >
          프로젝트 과제
          <strong>(4주차) - Pagination</strong>
        </Link>
      </li>
      <li>
        <Link
          href={
            "https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6"
          }
          target={"_blank"}
        >
          프로젝트 과제
          <strong>(3주차) - Search & caching</strong>
        </Link>
      </li>
      <li>
        <Link
          href={
            "https://github.com/wanted-onboarding8-6/pre-onboarding-8th-2week-6"
          }
          target={"_blank"}
        >
          프로젝트 과제
          <strong>(2주차) - kanbanBoard</strong>
        </Link>
      </li>
      <li>
        <Link
          href={"https://github.com/LEE-YO-HAN/wanted-pre-onboarding-frontend"}
          target={"_blank"}
        >
          프로젝트 과제
          <strong>(1주차) - TodoList</strong>
        </Link>
      </li>
    </Content>
  );
};

export const SpartaItem = () => {
  return (
    <Content>
      <h2>디지털서울문화예술대학교</h2>
      <p>2015.03.02 - 2021-08-18(졸업)</p>
      <span>상담심리학과(학사)</span>
    </Content>
  );
};

export const UniverseItem = () => {
  return (
    <Content>
      <h2>팀스파르타 주관 부트캠 프 이수</h2>
      <p>2022.08.01 - 2022.11.04(12주)</p>
      <ul>
        <p>팀 프로젝트를 통한 협업능력 강화(React-Sprig)</p>
        <li>
          <Link
            href={"https://github.com/ever-rent/ever-rent-FE"}
            target={"_blank"}
          >
            Ever-Rent (6주)
          </Link>
        </li>
        <li>
          <Link
            href={"https://github.com/ohhouse-team10/OHouse_FE"}
            target={"_blank"}
          >
            오늘의 집 클론코딩 (1주)
          </Link>
        </li>
      </ul>
    </Content>
  );
};

const Content = styled.section`
  animation: ExpFadein 0.6s;
  @keyframes ExpFadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;
