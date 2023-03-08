import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { MarkDownProps } from "@/types/pages";
import axios from "axios";

export const RecommandList = ({ title }: { title: string }) => {
  const { pathname } = useRouter();

  const [recommandList, setrecommandList] = useState<MarkDownProps[]>([]);
  const [postIndex, setPostIndex] = useState<number>(0);
  const listfetch = async () => {
    const response = await axios.get("/api/md");
    setrecommandList(response.data);
    setPostIndex(
      response.data.findIndex((post: MarkDownProps) => post.title === title),
    );
  };
  useEffect(() => {
    listfetch();
  }, []);

  return (
    <RecommandBox>
      <p>
        <strong>
          {pathname.split("/")[1] === "blog"
            ? '"Simple Memo"'
            : `"${pathname.split("/")[1]}"`}
        </strong>{" "}
        카테고리의 다른 글
      </p>
      {recommandList.map((item, index) => {
        if (postIndex - 2 <= index && index <= postIndex + 2)
          return (
            <li>
              <span>{item.description}</span>
            </li>
          );
      })}
    </RecommandBox>
  );
};
const RecommandBox = styled.ul`
  margin: 50px 0;
  padding: 15px;
  width: 100%;
  list-style: none;
  border: 1px solid #3a3a3a;

  & p {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #3a3a3a;
  }
  & li {
    margin-bottom: 5px;
  }
  & span {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #3a3a3a;
      font-weight: bold;
    }
  }
`;
