import styled from "styled-components";
import { useMdContextValue } from "@/context/mdContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const RecommandList = () => {
  const MdContext = useMdContextValue();
  const { pathname } = useRouter();
  console.log("mdmdmdmdmdmd", MdContext);

  // const listfetch = async () => {
  //   const data = await (await fetch(require("../../posting"))).json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   listfetch();
  // }, []);

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
      <li>이것두있구요</li>
      <li>저것두있어요</li>
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
  }
  & li {
    margin-bottom: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: white;
      font-weight: bold;
    }
  }
`;
