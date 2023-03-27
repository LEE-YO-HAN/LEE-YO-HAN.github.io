import styled from "styled-components";
import { PageLayout } from "./PageLayout";

export const Portpolio = () => {
  return (
    <PageLayout>
      <ContentWrap>
        <h2>Projects</h2>
        <ProjectBox>
          <h3>EVER-RENT</h3>
          <p>개인 간 중고 물품 렌탈 거래 플랫폼 개발</p>
          <span>팀원 (React: 3명 / Spring 2명)</span>
          <ContentBody>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/DRviCVKXfDY"
              title="에버렌트 시연영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
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
            </ul>
          </ContentBody>
        </ProjectBox>
        <ProjectBox>
          <h3 style={{ textAlign: "right", marginRight: "80px" }}>ToyCode</h3>
          <p style={{ textAlign: "right", marginRight: "80px" }}>
            기능과 직접적으로 관련된 라이브러리를 사용하지 않은 간단한 기능 구현
          </p>
          <div style={{ textAlign: "right", marginRight: "80px" }}>
            개인 프로젝트
          </div>
          <ContentBody>
            <ul>
              <p>핵심경험</p>
              <li>기능 구현 코드 복습과 더 나은 코드에 대한 고민</li>
              <li>부드러운 다크모드 전환 구현</li>
              <li>기능별 컴포넌트의 분리를 통해 라이브러리와 유사한 틀 구성</li>
            </ul>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/BkL5agYVa9k"
              title="ToyCode test"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </ContentBody>
        </ProjectBox>
      </ContentWrap>
    </PageLayout>
  );
};

const ContentWrap = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  width: 95vw;
  & h2 {
    font-size: 2rem;
  }
`;

const ProjectBox = styled.div`
  margin: 30px 0 30px 0;
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
`;
