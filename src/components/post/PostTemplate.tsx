import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { MarkDownProps } from "@/types/pages";
import { RecommandList } from "./RecommandList";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Comment } from "./Comment";

export const PostTemplate = ({
  title,
  description,
  category,
  date,
  content,
}: MarkDownProps) => {
  return (
    <TemplateWrap>
      <HeaderSection>
        <p>{category}</p>
        <h1>{description}</h1>
        <span>{date}</span>
      </HeaderSection>
      <MainContent>
        <ReactMarkdown
          className="markdown"
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="pre"
                  {...props}
                  style={darcula}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </MainContent>
      <RecommandList description={description} />
      <CommentBox>
        <p>COMMENTS</p>
        <Comment />
      </CommentBox>
    </TemplateWrap>
  );
};

const TemplateWrap = styled.main`
  max-width: 640px;

  @media only screen and (max-width: 480px) {
    max-width: 480px;
    width: 90vw;
  }
`;

const HeaderSection = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  color: ${props => props.theme.mainFontColor};
  background-color: ${props => props.theme.componentBackground};
  border-radius: 20px;
  & h1 {
    padding: 0 10px;
    width: 95%;
    font-weight: bold;
    font-size: 2rem;
    overflow-x: hidden;
  }
  & p {
    margin-top: 10px;
    padding: 0 10px;
    width: 95%;
    font-weight: bold;
    font-size: 1.2rem;
  }
  & span {
    padding: 0 10px;
    width: 95%;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

const MainContent = styled.main`
  margin-bottom: 50px;
  color: ${props => props.theme.mainFontColor};

  // markdown
  .markdown {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .markdown hr {
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .markdown h1 {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.componentAccentFontColor};
  }

  .markdown h2 {
    font-size: 1.6rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.componentAccentFontColor};
  }

  .markdown h3 {
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .markdown p {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .markdown a {
    color: #0070f3;
    text-decoration: underline;
    transition: 0.3s;
    &:hover {
      color: ${props => props.theme.componentHover};
    }
  }
  .markdown li {
    margin-left: 40px;
  }
  .markdown img {
    width: 100%;
    text-align: center;
  }

  .markdown pre {
    margin: 20px 0 80px 0;
    padding: 10px;
    background-color: #161b22;
    font-size: 0.9rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 10px;
    &::-webkit-scrollbar {
      width: 2px;
      background-color: #aaa;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 10vh;
      background: rgb(100, 100, 100);
      border-radius: 10px;
    }
  }

  .markdown code {
  }
`;

const CommentBox = styled.div`
  margin-bottom: 100px;
  width: 100%;

  & p {
    font-weight: bold;
  }
`;
