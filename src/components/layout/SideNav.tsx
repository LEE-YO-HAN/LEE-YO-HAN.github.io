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
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  height: 350px;
  background-color: #2c2c2c;
  border-radius: 10px;
`;
