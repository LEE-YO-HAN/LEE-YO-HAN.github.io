export type ActiveStatus = {
  callName: string;
  name: string;
  star: number;
  comment: string;
};

const makeStatus = (
  callName: string,
  name: string,
  star: number,
  comment: string,
) => {
  const data: ActiveStatus = {
    callName,
    name,
    star,
    comment,
  };
  return data;
};

export const stackStatus = [
  makeStatus(
    "html",
    "HTML5",
    3,
    "SEO를 위한 meta태그, 시멘틱 태그에 대해 공부하고 적극적으로 활용하고 있습니다.",
  ),
  makeStatus(
    "css",
    "CSS3",
    3,
    "기본적인 style과 동적인 UI 적용을 위해 사용하며, animationo/keyFrame/mediaQuery 등 적용 가능합니다.",
  ),
  makeStatus(
    "javascript",
    "JavaScript",
    3,
    "웹 동작을 제어하기 위한 주력으로 사용하는 언어입니다.",
  ),
  makeStatus(
    "typescript",
    "TypeScript",
    3,
    "type 변경이 자유로운 js 특성상 발생할 수 있는 오류를 최소화하기 위해 사용합니다.",
  ),
  makeStatus(
    "react",
    "React",
    3,
    "가상 돔 활용을 통해 간편하게 동적 UI를 구성해주는 라이브러리로서 사용합니다.",
  ),
  makeStatus(
    "next",
    "NextJS",
    3,
    "SSR, SEO, Dynamic routing 등 다양한 기능을 쉽게 사용할 수 있는 React 프레임워크로 사용합니다.",
  ),
  makeStatus(
    "styledcomponents",
    "styled-components",
    3,
    "CSS의 컴포넌트 단위 설정, provider를 이용한 공통 색상 지정 등 유지보수를 용이하게 하기 위해 사용합니다.",
  ),
  makeStatus(
    "reduxtoolkit",
    "ReduxToolkit",
    3,
    "전역 상태관리를 효율적으로 하기 위해 사용합니다.",
  ),
  makeStatus(
    "reactquery",
    "ReactQuery",
    2,
    "비동기 요청을 수월하게 관리하기 위해 사용합니다.",
  ),
  makeStatus("jest", "Jest", 1, "간편한 테스트코드를 위해 사용합니다."),
  makeStatus(
    "git",
    "Git",
    2,
    "협업, 형상관리, 개발 관련 기록 등의 정리를 간편하게 하기위해 사용합니다.",
  ),
  makeStatus(
    "sourcetree",
    "SourceTree",
    2,
    "git을 더 편리하게 사용할 수 있는 GUI 툴로 사용합니다.",
  ),
  makeStatus(
    "vsc",
    "Visual Studio Code",
    3,
    "유용한 Extention들과 선호하는 UI로 인해 사용합니다.",
  ),
  makeStatus(
    "vercel",
    "Vercel",
    2,
    "배포가 빠르고 간편하며, 쉽게 배포 환경에서의 동작을 파악하기 위해 사용합니다.",
  ),
  makeStatus(
    "nest",
    "NestJS",
    1,
    "백엔드에 대한 이해를 위해 간단한 기능들을 만들고 프론트단과 연동시키며 경험 축적하고 있습니다. 현재는 간단한 CRUD와 Login logic, socket.io를 이용한 실시간 통신 적용 경험이 있습니다.",
  ),
  makeStatus(
    "postgresql",
    "postgreSQL",
    1,
    "nestjs에서 발생한 요청을 처리하고 데이터를 저장하기 위한 툴로 사용합니다.",
  ),
];
