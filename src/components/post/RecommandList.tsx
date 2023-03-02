import styled from "styled-components";

export const RecommandList = ({ mainCategory }: { mainCategory: string }) => {
  return (
    <RecommandBox>
      <p>
        <strong>
          {mainCategory === "github" ? '"Simple Memo"' : `"${mainCategory}"`}
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
  list-style: none;
  border: 1px solid #3c2a21;

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
