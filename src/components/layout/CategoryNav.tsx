import styled from "styled-components";
import { useRouter } from "next/router";
import { Profile } from "./Profile";

export const CategoryNav = () => {
  const router = useRouter();

  const getList = (category: string) => {
    let cateUrl = category === "Simple Memo" ? "blog" : category.toLowerCase();
    let navData = {
      name: category,
      goLink: () => {
        router.push(`/${cateUrl}`);
      },
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
      <Profile />
      <NavList>
        <li>Category</li>
        {CATEGORYS.map((item, index) => {
          return (
            <ListItem key={index} onClick={item.goLink}>
              {item.name}
            </ListItem>
          );
        })}
      </NavList>
    </CategoryNavWrap>
  );
};

const CategoryNavWrap = styled.nav`
  margin-top: 60px;
  margin-left: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  & li:first-child {
    margin: 20px 0 20px 0;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: auto;
  }
`;

const ListItem = styled.li`
  margin-bottom: 7px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    font-weight: bold;
    /* color: #ffae00; */
    color: white;
  }
`;
