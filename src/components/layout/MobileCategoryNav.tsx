import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { CATEGORYS, NameList } from ".";
import { IoMdClose } from "react-icons/io";

interface Props {
  isOpen: boolean;
  closeNav: () => void;
}

export const MobileCategoryNav = ({ isOpen, closeNav }: Props) => {
  const router = useRouter();

  return (
    <NavWrap style={isOpen ? {} : { transform: "translateX(-100%)" }}>
      <CloseBtn>
        <IoMdClose onClick={closeNav} />
      </CloseBtn>
      <NavList>
        {CATEGORYS.map((item, index) => {
          return (
            <div key={index}>
              <CategoryName>{NameList[index]}</CategoryName>
              {item.map((item1, index1) => {
                const { name, cateUrl } = item1;
                return (
                  <ListItem key={index1}>
                    <Link
                      href={`/${cateUrl}`}
                      style={
                        `/${cateUrl}` === router.pathname ||
                        `/${cateUrl}` === router.asPath.split("-")[0]
                          ? { color: "white", fontWeight: "bold" }
                          : {}
                      }
                    >
                      {name}
                    </Link>
                  </ListItem>
                );
              })}
            </div>
          );
        })}
      </NavList>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.componentBackground};
  transition: 0.3s;
`;

const CloseBtn = styled.div`
  text-align: right;
  margin: 35px 12vw 0 0;

  color: ${props => props.theme.componentFontColor};

  & svg {
    font-size: 55px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  & p {
    margin-bottom: 20px;
    font-size: 2.2rem;
    cursor: auto;
  }
`;

const CategoryName = styled.p`
  margin: 20px 0 10px 0;
  font-weight: bold;

  color: ${props => props.theme.componentAccentFontColor};
  cursor: auto;
`;

const ListItem = styled.li`
  margin-bottom: 7px;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  & a {
    color: ${props => props.theme.componentFontColor};
    &:hover {
      font-weight: bold;
      color: white;
    }
  }
`;
