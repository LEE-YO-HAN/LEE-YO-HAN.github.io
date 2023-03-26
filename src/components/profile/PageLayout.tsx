import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.section`
  width: 100vw;
  height: 100vh;
  /* background-color: black;
  color: white; */
`;
