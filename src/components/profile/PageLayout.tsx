import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  margin: 0 auto;
  width: 95vw;
  height: 100vh;
`;
