import { MarkDownProps } from "@/types/pages";

export interface ProviderProps {
  children: React.ReactNode;
}

export type CreateContext = Dispatch<SetStateAction<MarkDownProps[]>>;
