import styled from "styled-components";
import Image from "next/image";
import { Pagination } from "./Pagination";
import { PostSearch } from "./PostSearch";
import { useState } from "react";
import { MarkDownList } from "@/types/pages";
import { PostInfiScroll } from "./PostInfiScroll";
import { useMobile } from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  posts: MarkDownList[];
}

export const PostGrid = ({ posts }: Props) => {
  const mobile = useMobile();

  const dateHandler = (date: string) => {
    return Number(new Date(date));
  };
  const postlist: MarkDownList[] = posts.sort(
    (a: MarkDownList, b: MarkDownList) =>
      dateHandler(b.date) - dateHandler(a.date),
  );

  const [activePage, setActivePage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  let pagePerItems = 6;
  let indexArray = Array.from({ length: pagePerItems }, (item, index) => {
    return index;
  });
  let pageIndex: number[] = [];
  pageIndex = indexArray.map(item => item + (activePage - 1) * pagePerItems);

  const router = useRouter();
  const { searchItem } = router.query;
  const pathname = router.pathname;
  const listName = `${
    pathname === "/search" ? `"${searchItem}" 관련 글` : "전체 글"
  } (${posts.length})`;
  return (
    <>
      {mobile ? (
        <PostInfiScroll postlist={postlist} listName={listName} />
      ) : (
        <GridContainer>
          <CountPost>
            <span>{listName}</span>
            <PostSearch />
          </CountPost>
          <GridBox>
            {postlist.map((item, index) => {
              const { title, description, category, date } = item;
              if (pageIndex[0] <= index && index <= pageIndex[5]) {
                return (
                  <Link key={index} href={`/${title.replaceAll(" ", "-")}`}>
                    <Card>
                      <Image
                        src={`/images/cards/${category.toUpperCase()}.png`}
                        alt="카테고리 이미지"
                        width={200}
                        height={150}
                        priority
                      />
                      <CardBody>
                        <p>
                          {description.length > 30
                            ? description.slice(0, 31) + "..."
                            : description}
                        </p>
                        <span>{date.replaceAll("-", ". ")}</span>
                      </CardBody>
                    </Card>
                  </Link>
                );
              }
            })}
          </GridBox>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={6}
            totalItemsCount={posts.length}
            handlePageChange={handlePageChange}
            maxItems={5}
          />
        </GridContainer>
      )}
    </>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
`;

const CountPost = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.componentShadow};
  font-weight: bold;
  width: 660px;

  & svg {
    font-size: 1.3rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.componentHover};
    }
  }
`;

const GridBox = styled.ul`
  margin: 20px 0;
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 200px 200px;
  grid-gap: 30px;
  list-style: none;
`;

const Card = styled.li`
  height: 300px;
  border-radius: 5px 5px 5px 5px;
  background-color: ${props => props.theme.componentBackground};
  cursor: pointer;
  transition: 0.1s;
  & img {
    border-radius: 5px 5px 0 0;
  }
  &:hover {
    box-shadow: 1px 1px 4px 2px ${props => props.theme.componentShadow};
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  height: 133px;
  color: ${props => props.theme.componentFontColor};
  font-weight: bold;
  & p {
    width: 100%;
    overflow-x: hidden;
  }
  & span {
    font-size: 0.8rem;
    color: ${props => props.theme.componentSubFontColor};
  }
`;
