import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { RecommandData } from "@/types/pages";
import axios from "axios";
import Link from "next/link";

export const RecommandList = ({ description }: { description: string }) => {
  const { asPath } = useRouter();
  const categoryName = asPath.split("-")[0].replace("/", "");

  const BASE_URL =
    "https://api.github.com/repos/LEE-YO-HAN/LEE-YO-HAN.github.io/contents/src/posting";
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [recommandList, setRecommandList] = useState<RecommandData[]>([]);

  const eachMarkdown = async (name: string) => {
    const url = `${BASE_URL}/${categoryName}/${name}`;
    const response = await axios.get(url, options);
    const content = Buffer.from(response.data.content, "base64").toString();
    const frontmatter = content.match(/^---\n([\s\S]+?)\n---/);
    if (frontmatter) {
      const matters = JSON.stringify(frontmatter[0]).split("\\n");
      const dateRegex = /\d{4}-\d{2}-\d{2}/;
      const match = matters[4].match(dateRegex);
      if (match) {
        const result = {
          title: matters[1].split("title: ")[1].replaceAll(" ", "-"),
          description: matters[2].split("description: ")[1],
          category: matters[3].split("category: ")[1],
          date: match[0],
        };
        setRecommandList(prev => prev.concat(result));
      }
    }
  };

  const githubREST = async () => {
    const main = `${BASE_URL}/${categoryName}`;
    const mainUrl = await axios.get(main, options);
    for (const data of mainUrl.data) {
      eachMarkdown(data.name);
    }
    setRecommandList(prev =>
      prev.sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    );
  };

  useEffect(() => {
    githubREST();
  }, []);

  return (
    <RecommandBox>
      <p>
        <strong>
          {categoryName === "github" ? '"Simple Memo"' : `"${categoryName}"`}
        </strong>{" "}
        카테고리의 다른 글
      </p>
      <ListBox>
        {recommandList.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`${item.title.replaceAll(" ", "-")}`}>
                <span
                  className={description === item.description ? "thisPost" : ""}
                >
                  {item.description.length < 50
                    ? item.description
                    : item.description.slice(0, 50) + "..."}
                </span>
              </Link>
              <span>{item.date}</span>
            </li>
          );
        })}
      </ListBox>
    </RecommandBox>
  );
};
const RecommandBox = styled.div`
  margin: 50px 0;
  padding: 15px;
  list-style: none;
  border: 1px solid #3a3a3a;
  color: ${props => props.theme.componentFontColor};
  background-color: ${props => props.theme.componentBackground};

  & p {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #3a3a3a;
  }
`;

const ListBox = styled.ul`
  height: 150px;
  overflow-y: scroll;

  & a {
    cursor: auto;
    & span {
      color: ${props => props.theme.componentFontColor};
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        color: ${props => props.theme.componentHover};
        font-weight: bold;
      }
    }
    & .thisPost {
      color: ${props => props.theme.componentHover};
      font-weight: bold;
    }
  }
  & li {
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &::-webkit-scrollbar {
    width: 2px;
    background-color: #aaa;
  }
  &::-webkit-scrollbar-thumb {
    height: 10vh;
    background: rgb(100, 100, 100);
  }
`;
