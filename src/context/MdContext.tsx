import { createContext, useContext, useState } from "react";
import { MarkDownProps } from "@/types/pages";
import { ProviderProps, CreateContext } from ".";

// context init
const initialContext = {
  posts: [],
  setPosts: () => {},
};

// create context
const PostContextValue = createContext<MarkDownProps[]>(initialContext.posts);
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
  const [posts, setPosts] = useState<MarkDownProps[]>([]);
  console.log(posts);

  return (
    <PostContextValue.Provider value={posts}>
      <PostContextUpdate.Provider value={setPosts}>
        {children}
      </PostContextUpdate.Provider>
    </PostContextValue.Provider>
  );
};
