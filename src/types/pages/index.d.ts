export interface PostGridProps {
  title: string;
  description: string;
  category: string;
  date: string;
  content: string;
}

export interface MarkDownProps {
  title: string;
  description: string;
  category: string;
  keyword: string;
  date: string;
  content: string;
}

export interface RecommandData {
  title: string;
  description: string;
  category: string;
  date: string;
}

export type MarkDownList = MarkDownProps | RecommandData;
