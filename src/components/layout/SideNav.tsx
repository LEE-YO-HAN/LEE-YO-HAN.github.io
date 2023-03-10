import styled from "styled-components";
import { CategoryNav } from "./CategoryNav";
import { useMobile } from "@/hooks/useMediaQuery";
export const SideNav = () => {
  const mobile = useMobile();
  return (
    <SideArea style={mobile ? { display: "none" } : {}}>
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
