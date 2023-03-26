import styled from "styled-components";
import { useState } from "react";
import { PageLayout } from "./PageLayout";
import Image from "next/image";

export const Intro = () => {
  return (
    <PageLayout>
      <IntroHeader>Yohan{"'"}s Dev!</IntroHeader>
      <FirstProfile>
        <Image
          src={`https://avatars.githubusercontent.com/u/85297720?v=4`}
          width={200}
          height={200}
          alt="profile"
        />
        <div>intreduce</div>
      </FirstProfile>
    </PageLayout>
  );
};

const IntroHeader = styled.header`
  height: 99px;
  line-height: 99px;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

const FirstProfile = styled.div`
  display: flex;
  flex-direction: row;
`;
