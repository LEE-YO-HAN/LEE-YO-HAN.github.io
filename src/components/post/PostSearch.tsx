import styled from "styled-components";
import React, { useState, useRef } from "react";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { useRouter } from "next/router";

export const PostSearch = () => {
  const router = useRouter();
  const [searchOn, setSearchOn] = useState(false);
  const searchOpacity = searchOn ? { opacity: "1" } : { opacity: "0" };

  const searchHandler = () => {
    setSearchOn(!searchOn);
  };

  const searchItem = useRef("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchItem.current = e.target.value;
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { searchItem: searchItem.current },
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      {searchOn ? (
        <FaWindowClose onClick={searchHandler} />
      ) : (
        <FaSearch onClick={searchHandler} />
      )}
      <SearchInput
        type="text"
        style={searchOpacity}
        placeholder="키워드 입력 후 엔터를 눌러주세요"
        onChange={onChangeHandler}
      />
    </form>
  );
};

const SearchInput = styled.input`
  padding: 5px;
  position: absolute;
  transform: translate(-115%, -18%);
  background: ${props => props.theme.backgroundColor};
  transition: 0.3s;
  width: 250px;
  height: 20px;
  border-radius: 10px;
  color: ${props => props.theme.componentFontColor};
  font-family: maplestory;
  font-size: 1.2rem;
  &:focus {
    outline: none;
    border-color: gold;
    box-shadow: 0 0 1px gold;
  }
`;
