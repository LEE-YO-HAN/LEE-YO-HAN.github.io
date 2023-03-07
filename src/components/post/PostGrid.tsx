import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

export const PostGrid = ({ posts }: any) => {
  const router = useRouter();
  return (
    <GridContainer>
      <p style={{ fontWeight: "bold", width: "660px" }}>
        전체 글 ({posts.length})
      </p>
      <GridBox>
        {posts.map((item: any, index: number) => {
          const { title, description, category, date, content } = item;
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
                <h1>{title}</h1>
                <p>{description.slice(0, 30)}...</p>
                <span>{date.replaceAll("-", ". ")}</span>
              </CardBody>
            </Card>
          );
        })}
      </GridBox>
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
  padding: 10px;
  & span {
    font-size: 0.8rem;
    color: #968a79;
  }
`;
