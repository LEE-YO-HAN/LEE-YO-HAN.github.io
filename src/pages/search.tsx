import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextHead } from "@/components/post/NextHead";
import { PostGrid } from "@/components/post/PostGrid";
import { useMdContextValue } from "@/context/MdContext";
import { MarkDownList } from "@/types/pages";

export default function Search() {
  const router = useRouter();
  const { searchItem } = router.query;

  const allMDdata = useMdContextValue();
  const [searchList, setSearchList] = useState<MarkDownList[]>([
    {
      title: "",
      description: "",
      category: "",
      date: "",
    },
  ]);

  const searchFilter = () => {
    if (searchItem) {
      const searchString = searchItem as string;
      const newList = allMDdata.filter(item =>
        item.description.toLowerCase().includes(searchString.toLowerCase()),
      );
      setSearchList(newList);
    }
  };
  useEffect(() => {
    searchFilter();
  }, [searchItem]);

  return (
    <>
      <NextHead
        title={"title"}
        description={"description"}
        keyword="keyword"
        category={"category"}
      />
      <PostGrid posts={searchList} />
    </>
  );
}
