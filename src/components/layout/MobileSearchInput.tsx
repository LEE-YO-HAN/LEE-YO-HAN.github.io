import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { useRouter } from "next/router";

export const MobileSearchInput = () => {
  const router = useRouter();
  const [searchOn, setSearchOn] = useState(true);
  const searchOpacity = searchOn ? { opacity: "1" } : { opacity: "0" };
  const searchFormIndex = searchOn ? { zIndex: "1" } : { zIndex: "-99" };

  const openSearch = () => {
    setSearchOn(true);
  };
  const closeSearch = () => {
    setSearchOn(false);
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

  useEffect(() => {
    closeSearch();
  }, [router.query.searchItem]);

  return (
    <>
      {searchOn ? (
        <FaWindowClose onClick={closeSearch} />
      ) : (
        <FaSearch onClick={openSearch} />
      )}
      <SearchForm onSubmit={onSubmitHandler} style={searchFormIndex}>
        <SearchInput
          type="text"
          style={searchOpacity}
          placeholder="키워드를 입력해주세요"
          onChange={onChangeHandler}
        />
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  position: absolute;
  top: 17px;
  left: 25%;
`;

const SearchInput = styled.input`
  padding: 5px;
  background: ${props => props.theme.backgroundColor};
  transition: 0.3s;
  width: 50vw;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  color: ${props => props.theme.componentFontColor};
  font-family: maplestory;
  font-size: 1.2rem;
  &:focus {
    outline: none;
    border-color: gold;
    box-shadow: 0 0 1px gold;
  }
`;
