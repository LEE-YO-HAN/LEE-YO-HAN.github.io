import styled from "styled-components";
import { MarkDownProps } from "@/types/pages";
import { useState, useEffect, useRef } from "react";
import { LoadingSpinner } from "@/util/LoadingSpinner";
import Image from "next/image";
import type MutableRefObject from "react";

export const PostInfiScroll = ({ postlist }: { postlist: MarkDownProps[] }) => {
  // const [page, setPage] = useState<number>(1);
  const page = useRef<number>(1);
  const [isLoading, setisLoading] = useState(false);

  let pagePerItems = 10;
  let indexArray = Array.from({ length: pagePerItems }, (item, index) => {
    return index;
  });
  const [pageIndexArray, setpageIndexArray] = useState<number[]>([]);
  let pageIndex: number[] = [];
  pageIndex =
    page.current === 1
      ? indexArray
      : indexArray.map(item => item + (page.current - 1) * pagePerItems);

  const [hasNextPage, setHasNextPage] = useState(true);
  const fatchData = () => {
    if (hasNextPage && !isLoading) {
      setisLoading(true);
      setHasNextPage(postlist.length > pageIndex.length);
      page.current += 1;
      setpageIndexArray(prev => prev.concat(pageIndex));
      setisLoading(false);
    }
  };

  console.log(page);
  console.log(pageIndex);

  const observerRef: any = useRef();
  const observer = (node: any) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        fatchData();
      }
    });
    node && observerRef.current.observe(node);
  };

  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      {postlist?.map((item, index) => {
        const { description, date, category } = item;
        if (
          pageIndexArray[0] <= index &&
          index <= pageIndexArray[pageIndex.length - 1]
        ) {
          return (
            <Container key={index}>
              <Image
                src={require(`../../images/${category.toUpperCase()}.png`)}
                alt={`${category}`}
                width={150}
                height={150}
                priority
              />
              <ContentBody>
                <p>
                  {description.length < 45
                    ? description
                    : `${description.slice(0, 45)}...`}
                </p>
                <span>{date}</span>
              </ContentBody>
            </Container>
          );
        }
      })}
      <IoTarget
        id="observeTarget"
        ref={observer}
        style={isLoading ? { display: "none" } : { display: "block" }}
      ></IoTarget>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90vw;
  height: 150px;
  box-shadow: 1px 1px 4px 1px #444444;
`;

const ContentBody = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vw;
  height: 100px;
  & p {
    font-weight: bold;
  }
  & span {
    text-align: right;
    font-size: 0.8rem;
  }
`;

const IoTarget = styled.div``;
