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
  position: relative;
  top: 100px;
  right: 0;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 249px;
  border-left: 1px solid #3c2a213b;
`;
