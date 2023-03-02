import styled from "styled-components";
import { CategoryNav } from "./CategoryNav";

export const SideNav = () => {
  return (
    <SideArea>
      <CategoryNav />
    </SideArea>
  );
};

const SideArea = styled.aside`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 249px;
  height: 100vh;
  border-left: 1px solid #3c2a213b;
`;
