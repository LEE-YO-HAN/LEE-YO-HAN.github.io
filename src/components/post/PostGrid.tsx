import styled from "styled-components";
import Image from "next/image";

export const PostGrid = ({ posts }: any) => {
  return (
    <GridBox>
      {posts.map((item: any, index: number) => {
        const { title, description, category, date, content } = item;
        return (
          <Card key={index}>
            <Image
              src={require(`../../images/${category.toUpperCase()}.png`)}
              alt="카테고리 이미지"
              width={200}
              height={150}
            />
            <h1>{title}</h1>
            <p>{description}</p>
            <span>{date.replaceAll("-", ". ")}</span>
          </Card>
        );
      })}
    </GridBox>
  );
};

const GridBox = styled.ul`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-gap: 30px;
  list-style: none;
`;

const Card = styled.li`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 2px 3px 2px #3c2a21;
  }
  & span {
    font-size: 0.8rem;
    color: ${props => props.theme.postFontColor};
  }
`;
