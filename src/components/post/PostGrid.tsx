import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Pagination } from "./Pagination";
import { useState } from "react";

export const PostGrid = ({ posts }: any) => {
  const router = useRouter();

  const [activePage, setActivePage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  let pagePerItems = 6;
  let indexArray = Array.from({ length: pagePerItems }, (item, index) => {
    return index;
  });
  let pageIndex: number[] = [];
  pageIndex =
    activePage === 1
      ? indexArray
      : indexArray.map(item => item + (activePage - 1) * pagePerItems);

  return (
    <GridContainer>
      <p style={{ fontWeight: "bold", width: "660px" }}>
        전체 글 ({posts.length})
      </p>
      <GridBox>
        {posts.map((item: any, index: number) => {
          const { title, description, category, date, content } = item;
          if (pageIndex[0] <= index && index <= pageIndex[5]) {
            return (
              <Card
                key={index}
                onClick={() =>
                  router.push(
                    `/${category === "github" ? "blog" : category}/${title
                      .replaceAll(" ", "-")
                      .toLowerCase()}`,
                  )
                }
              >
                <Image
                  src={require(`../../images/${category.toUpperCase()}.png`)}
                  alt="카테고리 이미지"
                  width={200}
                  height={150}
                />
                <CardBody>
                  <h1>{title.slice(0, 30)}</h1>
                  <p>{description.slice(0, 25)}...</p>
                  <span>{date.replaceAll("-", ". ")}</span>
                </CardBody>
              </Card>
            );
          }
        })}
      </GridBox>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={9}
        totalItemsCount={posts.length}
        handlePageChange={handlePageChange}
        maxItems={5}
      />
    </GridContainer>
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
