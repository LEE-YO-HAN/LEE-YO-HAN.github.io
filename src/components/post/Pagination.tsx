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
  // pages button length
  const totalLength =
    Math.ceil(totalItemsCount / itemsCountPerPage) < 1
      ? 1
      : Math.ceil(totalItemsCount / itemsCountPerPage);
  // pages button length arr
  const pagingArray = Array.from(
    {
      length: totalLength,
    },
    (item, index) => index,
  );

  // when active page change
  // page set's No. setting
  const [listNum, setListNum] = useState(1);
  useEffect(() => {
    setListNum(Math.floor(Number((activePage + maxItems - 1) / maxItems)));
  }, [activePage, maxItems]);

  // numbers in one set
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
        className={activePage === 1 ? "noPrev" : ""}
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
        className={activePage === pagingArray.length ? "noNext" : ""}
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
  margin-bottom: 50px;
  width: 300px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  transition: 0.2s;
  & ul,
  li {
    list-style: none;
  }
  & li {
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 25px;
    color: ${props => props.theme.buttonFontColor};
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.activeButtonColor};
      background-color: ${props => props.theme.activeBackgroundColor};
    }
  }
  & .activePage {
    color: ${props => props.theme.activeButtonColor};
    background-color: ${props => props.theme.activeBackgroundColor};
  }
  & li:first-child,
  li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.prevNextFont};
    background-color: ${props => props.theme.prevNextBackground};
    &:hover {
      background-color: ${props => props.theme.prevNextHover};
    }
  }
  & li:first-child.noPrev,
  li:last-child.noNext {
    color: ${props => props.theme.noPrevNextFont};
    background-color: ${props => props.theme.noPrevNextBackground};
    cursor: auto;
  }
`;
