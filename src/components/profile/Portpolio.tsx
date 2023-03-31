import Link from "next/link";
import styled from "styled-components";
import { PageLayout } from "./PageLayout";

export const Portpolio = () => {
  return (
    <PageLayout>
      <ContentWrap>
        <h2>Projects</h2>
        <ProjectBox>
          <ContentBody>
            <IframBox>
              <h3>EVER-RENT</h3>
              <p>개인 간 중고 물품 렌탈 거래 플랫폼 개발</p>
              <h4>팀원 (React: 3명 / Spring 2명)</h4>
              <iframe
                width="500"
                height="300"
                src="https://www.youtube.com/embed/DRviCVKXfDY"
                title="에버렌트 시연영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </IframBox>
            <ul>
              <p>핵심경험</p>
              <li>
                <strong>Kakao map API</strong>를 이용한 위치 정보 조회
              </li>
              <li>
                Redux/toolkit을 이용한 글 목록 구현 (무한 스크롤 / 페이지네이션)
              </li>
              <li>
                카테고리, 지역별 제품 필터링, <strong>검색 기능</strong> 연동
              </li>
              <li>
                <strong>LoadingSpinner, SkeletonUI</strong> 제작
              </li>
              <li>
                React-datepicker를 이용한 <strong>custom calendar</strong> 제작
              </li>
              <li>React-responsive(mediaQuery)를 이용한 반응형 웹 적용</li>
              <Link
                href="https://github.com/ever-rent/ever-rent-FE"
                target={"_blank"}
              >
                Github Link
              </Link>
            </ul>
          </ContentBody>
        </ProjectBox>
        <ProjectBox>
          <ContentBody>
            <ul>
              <p>핵심경험</p>
              <li>기능 구현 코드 복습과 더 나은 코드에 대한 고민</li>
              <li>부드러운 다크모드 전환 구현</li>
              <li>기능별 컴포넌트의 분리를 통해 라이브러리와 유사한 틀 구성</li>
              <Link
                href="https://github.com/ToyCode-org/ToyCode"
                target={"_blank"}
              >
                Github Link
              </Link>
            </ul>
            <IframBox>
              <h3>ToyCode</h3>
              <p>라이브러리를 사용하지 않은 간단한 기능 구현</p>
              <h4>개인 프로젝트</h4>
              <iframe
                width="500"
                height="300"
                src="https://www.youtube.com/embed/BkL5agYVa9k"
                title="ToyCode test"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </IframBox>
          </ContentBody>
        </ProjectBox>
      </ContentWrap>
    </PageLayout>
  );
};

const ContentWrap = styled.section`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h2 {
    margin: 0 auto;
    font-size: 2rem;
    width: 80vw;
  }
`;

const ProjectBox = styled.div`
  & h3 {
    font-size: 1.6rem;
  }
  & p {
    font-size: 1.4rem;
  }
  & ul {
    font-size: 1.2rem;
    list-style-type: circle;
  }
  & li {
    font-size: 1.2rem;
  }
`;

const ContentBody = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & p {
    margin-bottom: 5px;
    font-weight: bold;
  }
  & a {
    color: #796aff;
    transition: 0.2s;
    &:hover {
      color: gold;
    }
  }
`;

const IframBox = styled.div`
  & h4 {
    margin-bottom: 10px;
  }
`;
