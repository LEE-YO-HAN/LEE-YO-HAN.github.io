import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export const CategoryNav = () => {
  const router = useRouter();

  const getList = (category: string) => {
    let cateUrl =
      category === "Simple Memo" ? "github" : category.toLowerCase();
    let navData = {
      name: category,
      cateUrl: cateUrl,
    };
    return navData;
  };

  const CATEGORYS = [
    getList("Simple Memo"),
    getList("HTML"),
    getList("CSS"),
    getList("JavaScript"),
    getList("TypeScript"),
    getList("Redux"),
    getList("React"),
    getList("Nextjs"),
    getList("Nestjs"),
  ];
  return (
    <CategoryNavWrap>
      <NavList>
        <li>Category</li>
        {CATEGORYS.map((item, index) => {
          const { name, cateUrl } = item;
          return (
            <ListItem
              key={index}
              style={
                `/${cateUrl}` === router.pathname ||
                `/${cateUrl}` === router.asPath.split("-")[0]
                  ? { color: "white", fontWeight: "bold" }
                  : {}
              }
            >
              <Link href={`/${cateUrl}`}>{name}</Link>
            </ListItem>
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
  & li:first-child {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: auto;
  }
`;

const ListItem = styled.li`
  margin-bottom: 7px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: white;
  }
`;
