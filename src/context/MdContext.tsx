import { createContext, useContext, useState, useEffect } from "react";
import { MarkDownProps } from "@/types/pages";
import { ProviderProps, CreateContext } from ".";
import { RecommandData } from "@/types/pages";
import axios from "axios";

// context init
const initialContext = {
  posts: [],
  setPosts: () => {},
};

// create context
const PostContextValue = createContext<RecommandData[]>(initialContext.posts);
const PostContextUpdate = createContext<CreateContext>(initialContext.setPosts);

// create useContext
export const useMdContextValue = () => {
  const context = useContext(PostContextValue);
  return context;
};
export const useMdContextUpdate = () => {
  const update = useContext(PostContextUpdate);
  return update;
};

// create component
export const MdContext = ({ children }: ProviderProps) => {
  const [posts, setPosts] = useState<RecommandData[]>([]);

  const BASE_URL =
    "https://api.github.com/repos/LEE-YO-HAN/LEE-YO-HAN.github.io/contents/src/posting";
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const eachMarkdown = async (
    name: string,
    categoryName: string,
  ): Promise<RecommandData | undefined> => {
    const url = `${BASE_URL}/${categoryName}/${name}`;
    const response = await axios.get(url, options);
    const content = Buffer.from(response.data.content, "base64").toString();
    const frontmatter = content.match(/^---\n([\s\S]+?)\n---/);
    if (frontmatter) {
      const matters = JSON.stringify(frontmatter[0]).split("\\n");
      const dateRegex = /\d{4}-\d{2}-\d{2}/;
      const match = matters[4].match(dateRegex);
      if (match) {
        const result: RecommandData = {
          title: matters[1].split("title: ")[1].replaceAll(" ", "-"),
          description: matters[2].split("description: ")[1],
          category: matters[3].split("category: ")[1],
          date: match[0],
        };
        return result;
      }
    }
  };

  const githubREST = async () => {
    const main = `${BASE_URL}`;
    const mainUrl = await axios.get(main, options);
    const GET_POST_ALL = [];

    for (const cate of mainUrl.data) {
      const newCategorys = await axios.get(`${main}/${cate.name}`, options);
      for (const list of newCategorys.data) {
        const getMarkDown = await eachMarkdown(list.name, cate.name);
        if (getMarkDown !== undefined) {
          GET_POST_ALL.push(getMarkDown);
        }
      }
    }

    setPosts(GET_POST_ALL);
  };

  useEffect(() => {
    githubREST();
  }, []);

  return (
    <PostContextValue.Provider value={posts}>
      <PostContextUpdate.Provider value={setPosts}>
        {children}
      </PostContextUpdate.Provider>
    </PostContextValue.Provider>
  );
};

// provider setting
// import { MdContext } from "@/context/MdContext";
// <MdContext>
// </MdContext>

// usage in another component
// import { useMdContextUpdate } from "@/context/MdContext";
// const update = useMdContextUpdate();

//   useEffect(() => {
//     if (posts) {
//       update(posts);
//     }
//   }, [posts, update]);
