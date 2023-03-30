import styled from "styled-components";
import { Header } from "./Header";
import { SideNav } from "./SideNav";
import { Profile } from "./Profile";

interface ChildrenProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <LayoutWrap>
        <Header />
        <ContentWrap>
          <Profile />
          <PostArea>{children}</PostArea>
          <SideNav />
        </ContentWrap>
      </LayoutWrap>
    </>
  );
};

const LayoutWrap = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  font-family: maplestory;
  background-color: ${props => props.theme.backgroundColor};
`;

const ContentWrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.mainFontColor};
`;

const PostArea = styled.article`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 660px;
  width: 100%;
`;
