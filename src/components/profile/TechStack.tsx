import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { PageLayout } from "./PageLayout";
import { ActiveStack } from "./ActiveStack";

export const TechStack = () => {
  const languages = ["Languages", "html", "css", "javascript", "typescript"];
  const frameWorks = ["FrameWorks", "react", "next"];
  const librarys = [
    "Librarys",
    "styledcomponents",
    "reduxtoolkit",
    "reactquery",
    "jest",
  ];
  const devOps = ["DevOps", "git", "sourcetree", "vsc", "vercel"];
  const nowLearning = ["Now Learning...", "nest", "postgresql"];
  const skillsArray = [languages, frameWorks, librarys, devOps, nowLearning];

  const [activeItem, setactiveItem] = useState("");

  return (
    <PageLayout>
      <ContentWrap onClick={() => setactiveItem("")}>
        <TechSkill>
          <h2>Skills</h2>
          {skillsArray.map((arr, idx) => {
            return (
              <React.Fragment key={idx}>
                {arr.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index === 0 ? (
                        <p>{item}</p>
                      ) : (
                        <Image
                          src={`/images/stack/${item}.png`}
                          alt="stackCard"
                          width={100}
                          height={100}
                          onClick={e => {
                            e.stopPropagation();
                            setactiveItem(item);
                          }}
                          style={
                            activeItem === item
                              ? { boxShadow: "2px 2px 4px 3px gold" }
                              : {}
                          }
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}
        </TechSkill>
        <ActiveStack activeItem={activeItem} />
      </ContentWrap>
    </PageLayout>
  );
};

export const TechStackMemo = React.memo(TechStack);

const ContentWrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TechSkill = styled.div`
  margin: 20px 0 20px 50px;
  min-width: 440px;
  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  & p {
    margin: 25px 0 10px 0;
    font-size: 1.6rem;
    font-weight: bold;
  }
  & img {
    margin: 0 5px 0 5px;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      box-shadow: 2px 2px 4px 2px gold;
    }
  }
`;
