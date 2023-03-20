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
      <Header />
      <LayoutWrap>
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
  padding: 0 20px;
`;

const ContentWrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PostArea = styled.article`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 660px;
  width: 100%;
`;
