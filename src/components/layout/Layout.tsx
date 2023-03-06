import styled from "styled-components";
import { Header } from "./Header";
import { SideNav } from "./SideNav";
import { Profile } from "./Profile";

export const Layout = ({ children }: any) => {
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
  max-width: 1080px;
  /* width: 50vw; */
`;

const ContentWrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PostArea = styled.article`
  margin-top: 60px;
`;
