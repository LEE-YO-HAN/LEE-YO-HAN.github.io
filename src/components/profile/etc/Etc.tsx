import styled from "styled-components";
import Link from "next/link";
import { PageLayout } from "../PageLayout";
import { NowItem, WantedItem, UniverseItem, SpartaItem } from "./ExpItems";
import { useState } from "react";

export const Etc = () => {
  const [currentExp, setCurrentExp] = useState(1);

  const expHandler = (n: number) => {
    setCurrentExp(n);
  };

  return (
    <PageLayout>
      <ContentWrap>
        <h2>Personal Experience</h2>
        <EXPContainer>
          <EXPnav>
            <li onClick={() => expHandler(1)}>Now Doing</li>
            <li onClick={() => expHandler(2)}>원티드 프리온보딩 인턴십</li>
            <li onClick={() => expHandler(3)}>팀스파르타 부트캠프</li>
            <li onClick={() => expHandler(4)}>학사</li>
          </EXPnav>
          <EXPbar>
            <After onClick={() => expHandler(1)}>
              <Pointer
                style={currentExp === 1 ? { backgroundColor: "#6360ff" } : {}}
              ></Pointer>
            </After>
            <Wanted onClick={() => expHandler(2)}>
              <Pointer
                style={currentExp === 2 ? { backgroundColor: "#60b2ff" } : {}}
              ></Pointer>
            </Wanted>
            <Sparta onClick={() => expHandler(3)}>
              <Pointer
                style={currentExp === 3 ? { backgroundColor: "#ffad60" } : {}}
              ></Pointer>
            </Sparta>
            <University onClick={() => expHandler(4)}>
              <Pointer
                style={currentExp === 4 ? { backgroundColor: "#ff6060" } : {}}
              ></Pointer>
            </University>
          </EXPbar>
          <EXPannot>
            {currentExp === 1 ? <NowItem /> : null}
            {currentExp === 2 ? <WantedItem /> : null}
            {currentExp === 3 ? <UniverseItem /> : null}
            {currentExp === 4 ? <SpartaItem /> : null}
          </EXPannot>
        </EXPContainer>
      </ContentWrap>
    </PageLayout>
  );
};

const ContentWrap = styled.section`
  & h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    padding-top: 10px;
  }
`;

const EXPContainer = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50vh;
`;

const EXPnav = styled.nav`
  position: absolute;
  transform: translate(-228%, 150%);
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

const EXPbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

const After = styled.div`
  width: 15px;
  height: 40%;
  background-color: #6360ff;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  & div {
    border: 3px solid #6360ff;
    transform: translate(-30%, 225%);
    transition: 0.2s;
    &:hover {
      background-color: #6360ff;
    }
  }
`;

const Wanted = styled.div`
  width: 15px;
  height: 30%;
  background-color: #60b2ff;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  & div {
    border: 3px solid #60b2ff;
    transform: translate(-30%, 150%);
    transition: 0.2s;
    &:hover {
      background-color: #60b2ff;
    }
  }
`;

const Sparta = styled.div`
  width: 15px;
  height: 20%;
  background-color: #ffad60;
  cursor: pointer;
  & div {
    border: 3px solid #ffad60;
    transform: translate(-30%, 90%);
    transition: 0.2s;
    &:hover {
      background-color: #ffad60;
    }
  }
`;
const University = styled.div`
  width: 15px;
  height: 10%;
  background-color: #ff6060;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  & div {
    border: 3px solid #ff6060;
    transform: translate(-30%, 15%);
    transition: 0.2s;
    &:hover {
      background-color: #ff6060;
    }
  }
`;

const Pointer = styled.div`
  position: absolute;
  transform: translate(-30%, 250%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid gold;
  cursor: pointer;
`;

const EXPannot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

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
