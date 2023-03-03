import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { MarkDownProps } from "@/types/pages";
import { RecommandList } from "./RecommandList";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
                  // style={dark}
                  style={darcula}
                  // style={vsDark}
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
  margin-top: 80px;

  // markdown
  .markdown {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #333;
  }

  .markdown h1 {
    font-size: 1.6rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .markdown h2 {
    font-size: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .markdown p {
    margin-bottom: 1rem;
  }

  .markdown a {
    color: #0070f3;
    text-decoration: underline;
  }

  .markdown pre {
    margin: 20px 0 80px 0;
    padding: 20px;
    background-color: #161b22;
    font-size: 0.9rem;
    font-family: "Consolas", "Sans Mono", "Courier", "monospace";
    border-radius: 10px;
  }

  .markdown code {
  }
`;
