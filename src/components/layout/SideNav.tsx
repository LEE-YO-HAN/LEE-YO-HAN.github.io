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
  padding: 20px 0;
  position: relative;
  top: 100px;
  right: 0;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  /* height: 350px; */
  height: max-content;
  color: ${props => props.theme.componentFontColor};
  background-color: ${props => props.theme.componentBackground};
  border-radius: 10px;
`;
