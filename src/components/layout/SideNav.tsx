import styled from "styled-components";
import { useRouter } from "next/router";
import { Profile } from "./Profile";

export const SideNav = () => {
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
    getList("Next.js"),
    getList("Nest.js"),
  ];

  return (
    <SideArea>
      <CategoryNav>
        <Profile />
        <NavList>
          <li>Category</li>
          {CATEGORYS.map((item, index) => {
            return (
              <li key={index} onClick={item.goLink}>
                {item.name}
              </li>
            );
          })}
        </NavList>
      </CategoryNav>
    </SideArea>
  );
};

const SideArea = styled.aside`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 199px;
  height: 100vh;
  border-left: 1px solid lightgray;
`;
const CategoryNav = styled.nav`
  margin-top: 60px;
`;

const NavList = styled.ul`
  & li {
    /* margin-left: 20px; */
    margin-bottom: 7px;
    list-style: none;
    cursor: pointer;

    &:first-child {
      margin: 20px 0 20px 0;
      font-weight: bold;
      font-size: 1.2rem;
      cursor: auto;
    }
  }
`;
