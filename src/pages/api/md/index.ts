import type { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { MarkDownProps } from "@/types/pages";

type Error = {
  error: string;
};

type Data = MarkDownProps[] | Error;

type Send<Data> = (data: MarkDownProps[]) => void;

type newApiResponse = {
  send: Send<Data>;
  json: Send<Data>;
  status: (statusCode: number) => NextApiResponse<Data>;
};

export default async function handler(
  req: NextApiRequest,
  res: newApiResponse,
) {
  if (req.method === "GET") {
    try {
      const result = await getMdList();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error: "failed to fetch data" });
    }
  }
}

export const getMdList = async () => {
  const dirPath = join(process.cwd() + "/src", "posting");
  const mdFiles = await getMdFiles(dirPath);
  const posts: MarkDownProps[] = [];
  for (const filePath of mdFiles) {
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);
    posts.push({
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      content,
    });
  }
  return posts;
};

async function getMdFiles(dirPath: string): Promise<string[]> {
  const mdFiles: string[] = [];
  const files = await fs.readdir(dirPath);
  for (const file of files) {
    const filePath = join(dirPath, file);
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) {
      mdFiles.push(...(await getMdFiles(filePath)));
    } else if (stats.isFile() && file.endsWith(".md")) {
      mdFiles.push(filePath);
    }
  }
  return mdFiles;
}
