import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { MarkDownProps } from "@/types/pages";
import { RecommandList } from "./RecommandList";

export const PostTemplate = ({
  title,
  description,
  category,
  date,
  content,
}: MarkDownProps) => {
  return (
    <>
      <HeaderSection>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{date}</span>
      </HeaderSection>
      <MainContent>
        <ReactMarkdown>{content}</ReactMarkdown>
      </MainContent>
      {/* <RecommandList mainCategory={category} /> */}
      {/* <div>
        <p>댓글</p>
        <div></div>
      </div> */}
    </>
  );
};

const HeaderSection = styled.section`
  & h1 {
    font-weight: bold;
    font-size: 2rem;
  }
  & p {
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  & span {
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

const MainContent = styled.main`
  margin-top: 50px;
`;
