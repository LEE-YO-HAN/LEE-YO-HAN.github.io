import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { CATEGORYS, NameList } from ".";

export const CategoryNav = () => {
  const router = useRouter();

  return (
    <CategoryNavWrap>
      <NavList>
        <p>Category</p>
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
    </CategoryNavWrap>
  );
};

const CategoryNavWrap = styled.nav`
  margin-left: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  transition: 0.3s;
  & p:first-child {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: auto;
  }
`;

const CategoryName = styled.p`
  margin: 20px 0 10px 0;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => props.theme.componentAccentFontColor};
  cursor: auto;
`;

const ListItem = styled.li`
  margin-bottom: 7px;
  cursor: pointer;

  & a {
    color: ${props => props.theme.componentFontColor};
    &:hover {
      font-weight: bold;
      color: white;
    }
  }
`;
