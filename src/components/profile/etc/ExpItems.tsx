import Link from "next/link";
import styled from "styled-components";

const listMaker = (
  link: string,
  body: string,
  sub?: string,
  github?: string,
) => {
  return {
    link,
    body,
    sub,
    github,
  };
};

export const NowItem = () => {
  const LIST = [
    listMaker(
      "https://www.na-hon-bob.shop/",
      "나혼밥 레시피",
      "혼자 사는 사람들의 레시피 공유 사이트",
      "https://github.com/ToyCode-org/na-hon-bob-fe",
    ),
    listMaker(
      "https://lee-yo-han.github.io/",
      "GITHUB Blog",
      "개인 블로그 개발",
      "https://github.com/LEE-YO-HAN/LEE-YO-HAN.github.io",
    ),
    listMaker(
      "https://toy-code.vercel.app/",
      "ToyCode",
      "간단한 기능 복습",
      "https://github.com/ToyCode-org/ToyCode",
    ),
    listMaker(
      "https://marketplace.visualstudio.com/items?itemName=LEE-YO-HAN.react-redux-optional-snippets",
      "코드스니펫",
      "반복되는 코드를 최소화하기 위한 간단한 스니펫 제작",
      "https://github.com/ToyCode-org/optional-React-Redux-snippet",
    ),
  ];
  return (
    <Content>
      <h2>Now Doing</h2>
      <p>개인 프로젝트</p>
      {LIST.map((item, index) => {
        const { link, body, sub, github } = item;
        return (
          <ProjectList key={index}>
            <Link href={link} target="_black">
              {body}
            </Link>
            <span> - {sub}</span>
            <span>
              -{" "}
              <Link
                href={github as string}
                target="_black"
                className="githubLink"
              >
                github Link
              </Link>
            </span>
          </ProjectList>
        );
      })}
    </Content>
  );
};
const ProjectList = styled.li`
  display: flex;
  flex-direction: column;

  .githubLink {
    color: black;
    font-size: 1rem;
  }
`;

export const WantedItem = () => {
  const LIST = [
    listMaker(
      "https://github.com/LEE-YO-HAN/week4-project",
      "(4주차) - Pagination",
    ),
    listMaker(
      "https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6",
      "(3주차) - Search & caching",
    ),
    listMaker(
      "https://github.com/wanted-onboarding8-6/pre-onboarding-8th-2week-6",
      "(2주차) - kanbanBoard",
    ),
    listMaker(
      "https://github.com/LEE-YO-HAN/wanted-pre-onboarding-frontend",
      "(1주차) - TodoList",
    ),
  ];
  return (
    <Content>
      <h2>원티드 프리온보딩 인턴십</h2>
      <p>2022.12.19 - 2023.01.20(4주)</p>
      <ul>
        <p>동료학습을 통한 기업과제 수행</p>
        {LIST.map((item, index) => {
          const { link, body } = item;
          return (
            <li key={index}>
              <Link href={link} target={"_blank"}>
                프로젝트 과제
                <strong>{body}</strong>
              </Link>
            </li>
          );
        })}
      </ul>
    </Content>
  );
};

export const SpartaItem = () => {
  const LIST = [
    listMaker("https://github.com/ever-rent/ever-rent-FE", "Ever-Rent (8주)"),
    listMaker(
      "https://github.com/ohhouse-team10/OHouse_FE",
      "오늘의 집 클론코딩 (1주)",
    ),
  ];
  return (
    <Content>
      <h2>팀스파르타 주관 부트캠 프 이수</h2>
      <p>2022.08.01 - 2022.11.04(12주)</p>
      <ul>
        <p>팀 프로젝트를 통한 협업능력 강화(React-Sprig)</p>
        {LIST.map((item, index) => {
          const { link, body } = item;
          return (
            <li key={index}>
              <Link href={link} target={"_blank"}>
                {body}
              </Link>
            </li>
          );
        })}
      </ul>
    </Content>
  );
};

export const UniverseItem = () => {
  return (
    <Content>
      <h2>디지털서울문화예술대학교</h2>
      <p>2015.03.02 - 2021-08-18(졸업)</p>
      <span>상담심리학과(학사)</span>
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
