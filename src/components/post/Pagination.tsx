import styled from "styled-components";
import { useEffect, useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

interface Props {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  handlePageChange: any;
  maxItems: number;
}

export const Pagination = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  handlePageChange,
  maxItems,
}: Props) => {
  // 페이지 버튼 총 길이
  const totalLength =
    Math.ceil(totalItemsCount / itemsCountPerPage) < 1
      ? 1
      : Math.ceil(totalItemsCount / itemsCountPerPage);
  // 버튼 총 길이를 배열로 생성
  const pagingArray = Array.from(
    {
      length: totalLength,
    },
    (item, index) => index,
  );

  // 현재 페이지가 바뀔때마다.
  // 페이지 묶음의 몇 번째인지 설정
  const [listNum, setListNum] = useState<number>(1);
  useEffect(() => {
    setListNum(Math.floor(Number((activePage + maxItems - 1) / maxItems)));
  }, [activePage, maxItems]);

  // 한 묶음에 보여줄 페이지 넘버
  const firPagingArr = Array.from(
    {
      length: maxItems,
    },
    (item, index) => {
      return index;
    },
  );
  const otherPagingArr = Array.from(
    {
      length: maxItems,
    },
    (item, index) => {
      return index + maxItems * (listNum - 1);
    },
  );
  const listNumIndex = listNum === 1 ? firPagingArr : otherPagingArr;

  return (
    <PagingUl>
      <li
        onClick={() => {
          if (activePage !== 1) {
            handlePageChange(activePage - 1);
          }
        }}
        style={activePage === 1 ? { backgroundColor: `gray` } : {}}
      >
        <BsCaretLeftFill />
      </li>
      {pagingArray.map((item, index) => {
        if (
          listNumIndex[0] <= index &&
          index <= listNumIndex[listNumIndex.length - 1]
        ) {
          return (
            <li
              key={item}
              id={`${index + 1}`}
              className={index + 1 === activePage ? "activePage" : "page"}
              onClick={() => {
                handlePageChange(index + 1);
              }}
            >
              {index + 1}
            </li>
          );
        }
      })}
      <li
        onClick={() => {
          if (activePage !== pagingArray.length) {
            handlePageChange(activePage + 1);
          }
        }}
        style={
          activePage === pagingArray.length ? { backgroundColor: `gray` } : {}
        }
      >
        <BsCaretRightFill />
      </li>
    </PagingUl>
  );
};

const PagingUl = styled.ul`
  padding: 0;
  margin: auto;
  margin-top: 50px;
  width: 300px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  transition: 0.3s;
  & ul,
  li {
    list-style: none;
  }
  & li {
    width: 35px;
    height: 35px;
    text-align: center;
    font-size: 25px;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: black;
      background-color: blanchedalmond;
    }
  }
  & .activePage {
    color: black;
    background-color: blanchedalmond;
  }
  & li:first-child,
  li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c2c2c;
    &:hover {
      background-color: #585858;
    }
  }
`;
