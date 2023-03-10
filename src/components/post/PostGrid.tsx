import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Pagination } from "./Pagination";
import { useState } from "react";
import { MarkDownProps } from "@/types/pages";
import { PostInfiScroll } from "./PostInfiScroll";
import { useMobile } from "@/hooks/useMediaQuery";
import Link from "next/link";

export const PostGrid = ({ posts }: any) => {
  const router = useRouter();
  const mobile = useMobile();

  const dateHandler = (date: string) => {
    return Number(new Date(date));
  };
  const postlist = posts.sort(
    (a: MarkDownProps, b: MarkDownProps) =>
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

  return (
    <>
      {mobile ? (
        <PostInfiScroll postlist={postlist} />
      ) : (
        <GridContainer>
          <p style={{ fontWeight: "bold", width: "660px" }}>
            전체 글 ({posts.length})
          </p>
          <GridBox>
            {postlist.map((item: any, index: number) => {
              const { title, description, category, date, content } = item;
              if (pageIndex[0] <= index && index <= pageIndex[5]) {
                return (
                  <Link
                    key={index}
                    href={`/${category === "github" ? "blog" : category}/${title
                      .replaceAll(" ", "-")
                      .toLowerCase()}`}
                  >
                    <Card>
                      <Image
                        src={require(`../../images/${category.toUpperCase()}.png`)}
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
  & p {
    margin: 0 auto;
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
  background-color: #2c2c2c;
  cursor: pointer;
  transition: 0.3s;
  & img {
    border-radius: 5px 5px 0 0;
  }
  &:hover {
    box-shadow: 1px 1px 3px 4px #777777;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  height: 133px;
  & span {
    font-size: 0.8rem;
    color: #968a79;
  }
`;
