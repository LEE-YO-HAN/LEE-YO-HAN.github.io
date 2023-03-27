import Image from "next/image";
import styled from "styled-components";
import { PageLayout } from "./PageLayout";

export const TechStack = () => {
  const languages = ["html", "css", "js", "ts"];
  const frameWorks = ["react", "next"];
  const librarys = ["reduxtoolkit", "reactquery", "jest"];
  const devOps = ["git", "sourcetree", "vsc"];
  const nowLearning = ["nest", "postgresql"];

  return (
    <PageLayout>
      <TechSkill>
        <h2>Skills</h2>
        <h3>Frontend</h3>
        <p>Lang</p>
        {languages.map((item, index) => {
          return (
            <Image
              key={index}
              src={`${require("../../images/REACT.png")}`}
              alt="stackCard"
              width={50}
              height={50}
            />
          );
        })}
        <dialog>HTML5</dialog>
        <dialog>CSS3</dialog>
        <dialog>CSS3</dialog>
        <dialog>JS</dialog>
        <dialog>TS</dialog>
        <p>FrameWorks</p>
        <dialog>React</dialog>
        <dialog>NextJS</dialog>
        <p>Librarys</p>
        <dialog>Redux(toolkit)</dialog>
        <dialog>React Query</dialog>
        <dialog>styled-components</dialog>
        <dialog>Jest</dialog>
        <h3>DevOps</h3>
        <dialog>Git / SourceTree</dialog>
        <dialog>Visual studio code</dialog>
        <h3>Now Learning</h3>
        <dialog>NestJS</dialog>
        <dialog>postgreSQL</dialog>
      </TechSkill>
    </PageLayout>
  );
};

const TechSkill = styled.div`
  margin: 20px 0 20px 50px;
  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  & p {
    font-weight: bold;
  }
`;
