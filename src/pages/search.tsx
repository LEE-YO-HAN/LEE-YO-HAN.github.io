import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextHead } from "@/components/post/NextHead";
import { PostGrid } from "@/components/post/PostGrid";
import { useMdContextValue } from "@/context/MdContext";
import { RecommandData, MarkDownList } from "@/types/pages";

export default function Search() {
  const router = useRouter();
  const { searchItem } = router.query;

  const allMDdata = useMdContextValue();
  const [searchList, setSearchList] = useState<MarkDownList[]>([
    {
      title: "mcok",
      description: "mcok",
      category: "mcok",
      date: "mcok",
    },
  ]);

  const searchFilter = (list: RecommandData[], searchItem: string) => {
    if (searchItem) {
      const newList = list.filter(item =>
        item.description.toLowerCase().includes(searchItem.toLowerCase()),
      );
      return newList;
    }
  };
  useEffect(() => {
    const newList = searchFilter(
      allMDdata,
      searchItem as string,
    ) as RecommandData[];
    setSearchList(newList);
  }, [searchItem]);

  return (
    <>
      <NextHead
        title={"title"}
        description={"description"}
        category={"category"}
      />
      <PostGrid posts={searchList} />
    </>
  );
}
