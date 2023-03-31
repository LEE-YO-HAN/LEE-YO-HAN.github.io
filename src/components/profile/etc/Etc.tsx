import styled from "styled-components";
import { PageLayout } from "../PageLayout";
import { NowItem, WantedItem, UniverseItem, SpartaItem } from "./ExpItems";
import { EXPbar } from "./EXPbar";
import React, { useState } from "react";

export const Etc = () => {
  const [currentExp, setCurrentExp] = useState(1);

  const expHandler = (n: number) => {
    setCurrentExp(n);
  };

  const expItems = [
    { id: 1, label: "Now Doing", component: <NowItem /> },
    { id: 2, label: "원티드 프리온보딩 인턴십", component: <WantedItem /> },
    { id: 3, label: "팀스파르타 부트캠프", component: <SpartaItem /> },
    { id: 4, label: "학사", component: <UniverseItem /> },
  ];

  const EXP_ANNOT_TRANSLATE = [0, 25, 60, 75];

  return (
    <PageLayout>
      <ContentWrap>
        <h2 className="title">Personal Experience</h2>
        <EXPContainer>
          <EXPnav>
            {expItems.map(item => {
              const { id, label } = item;
              return (
                <li key={id} onClick={() => expHandler(id)}>
                  {label}
                </li>
              );
            })}
          </EXPnav>
          <EXPbar currentExp={currentExp} expHandler={expHandler} />
          <EXPannot
            style={{
              transform: `translate(0%,${
                EXP_ANNOT_TRANSLATE[currentExp - 1]
              }%)`,
            }}
          >
            {expItems.map(item => (
              <div key={item.id}>
                {currentExp === item.id && item.component}
              </div>
            ))}
          </EXPannot>
        </EXPContainer>
      </ContentWrap>
    </PageLayout>
  );
};

const ContentWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: hidden;
  & h2 {
    margin: 0 auto;
    padding-top: 5vh;
    font-size: 2rem;
    width: 85vw;
  }
  & .title {
    height: 20vh;
  }
`;

const EXPContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50vh;
`;

const EXPnav = styled.nav`
  position: absolute;
  transform: translate(-230%, 150%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18%;
  font-size: 1.5rem;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 15%;
    border: 1px solid gold;
    background: linear-gradient(165deg, #ffff97 0%, #ffffa6 0%, #ffffff 100%);
    cursor: pointer;
    &:hover {
      background: linear-gradient(
        165deg,
        #ffffa7 0%,
        #ffffa6 50%,
        #feffec 100%
      );
    }
    &:first-child {
      border-radius: 0 15px 0 0;
    }
    &:last-child {
      border-radius: 0 0 15px 0;
    }
  }
`;

const EXPannot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  overflow-x: hidden;
  & li {
    list-style: none;
  }
  & a {
    font-size: 1.2rem;
    color: #796aff;
    transition: 0.3s;
    &:hover {
      color: gold;
    }
  }
`;
