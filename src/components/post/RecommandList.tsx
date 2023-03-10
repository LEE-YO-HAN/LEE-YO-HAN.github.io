import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MarkDownProps } from "@/types/pages";
import axios from "axios";
import { useMdContextValue, useMdContextUpdate } from "@/context/MdContext";

export const RecommandList = ({ description }: { description: string }) => {
  const { pathname } = useRouter();
  const router = useRouter();

  // context
  const recommandList = useMdContextValue();
  const setRecommandList = useMdContextUpdate();

  const listfetch = async () => {
    const response = await axios.get("/api/md");
    if (pathname.split("/")[1] === "blog") {
      setRecommandList(
        response.data.filter(
          (item: MarkDownProps) => item.category === "github",
        ),
      );
    } else {
      setRecommandList(
        response.data.filter(
          (item: MarkDownProps) => item.category === pathname.split("/")[1],
        ),
      );
    }
  };

  useEffect(() => {
    listfetch();
  }, []);

  const postLinkHandler = (title: string) => {
    router.push(title.replaceAll(" ", "-"));
  };

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
      <ListBox>
        {recommandList.map((item, index) => {
          return (
            <li key={index}>
              <span
                onClick={() => postLinkHandler(item.title)}
                style={
                  description === item.description
                    ? { fontWeight: "bold", color: "white" }
                    : {}
                }
              >
                {item.description}
              </span>
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
  /* width: 100%; */
  list-style: none;
  border: 1px solid #3a3a3a;

  & p {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #3a3a3a;
  }
`;

const ListBox = styled.ul`
  height: 150px;
  overflow-y: scroll;

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

  &::-webkit-scrollbar {
    width: 2px;
    background-color: #aaa;
  }
  &::-webkit-scrollbar-thumb {
    height: 10vh;
    background: rgb(100, 100, 100);
  }
`;
