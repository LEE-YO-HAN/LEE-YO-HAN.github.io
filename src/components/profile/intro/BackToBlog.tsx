import styled from "styled-components";
import Link from "next/link";
import { TfiControlBackward } from "react-icons/tfi";

export const BackToBlog = () => {
  return (
    <Link href={"/"}>
      <BackToBlogWrap>
        <TfiControlBackward />
        Back to Blog
      </BackToBlogWrap>
    </Link>
  );
};

const BackToBlogWrap = styled.span`
  position: absolute;
  top: 2%;
  left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 135px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #838383;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
