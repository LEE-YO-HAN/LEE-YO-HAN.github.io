---
title: github git use markdown viewer
description: Github pages 블로그 Markdown 불러오기
category: github
keyword: github, markdown
date: "2023-03-12"
---

## Markdown을 통해 블로그를 작성하는 이유

- 머리말을 따로 설정해 route 링크를 설정해주거나 제목, 날짜, 카테고리, 등을 설정하여 블로그 탐색을 용이하게 해줄 수 있다.
- Markdown을 repository에 저장함으로써 githubAPI 등을 이용한 데이터 조회를 가능하게 한다.

## 필요한 패키지

```bash
yarn add gray-matter # 문자열이나 파일에서 머리말을 구문 분석, 파일에서 메타데이터와 내용 등 추출 시 사용
yarn add marked
yarn add @types/marked # 타입스크립트의 경우
yarn add react-markdown # <div dangerouslySetInnerHTML={createMarkup()} />과 유사함
yarn add remark-gfm # 마크다운 문법이 다양하게 적용될 수 있도록 도와주는 플러그인
yarn add react-syntax-highlighter
yarn add @types/react-syntax-highlighter # 타입스크립트의 경우
```

참조

https://yarnpkg.com/package/react-markdown

https://yarnpkg.com/package/react-syntax-highlighter

## posting 파일들은 src 파일 안에 있다고 가정

## 1. [slug].tsx 파일 생성

```javascript

import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Link, table, checklist 등의 형식을 표현할 수 있게 해줌
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"; - 에러 발생
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface Props {
  title: string;
  date: string;
  content: string;
}

export default function BlogPost({ title, date, content }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <ReactMarkdown
          className="markdown"
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="pre"
                  {...props}
                  // style={dark}
                  style={darcula}
                  // style={vsDark}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
    </div>
  );
}

// 파일명을 통해 url 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = join(process.cwd() + "src" + "/posting", "blog");
  const filenames = await fs.readdir(postsDirectory);
  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
};

// url에 해당하는 파일명을 찾아 matter로 데이터 추출
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = join(process.cwd() + "src" + "/posting", "blog", `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    props: {
      title: data.title,
      date: data.date,
      content,
    },
  };
};

```

## 2. SyntaxHighlighter style 설정

SyntaxHighlighter 내부의 코드블록 style을 이용하기 위해서는 그에 맞는 소스를 가져와야 한다.

### 에러가 발생하는 ...dist/esm/styles/prism

import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrNEOn%2Fbtr34VAZ3qk%2Fhy9KPHftPMrHNswKxBdBk0%2Fimg.png)

### 정상 작동하는 imports ...dist/cjs/styles/prism

```javascript
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQTv0s%2Fbtr37t4PDmS%2Fc0Sw6mnao0GUU05pG0mnb0%2Fimg.png)

```javascript
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdjz47g%2Fbtr35dhlOF6%2FmmOkOQB6R1x5TgzkEcQ27K%2Fimg.png)

```javascript
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F29uf2%2Fbtr3V6KDHYg%2FeTnSoSaIAgZYqOcK7MTr8K%2Fimg.png)

원하는 스타일을 SyntaxHighlighter style에 넣어주면 된다.

> Markdown content(내용)는 ReactMarkdown 컴포넌트의 className을 통해 수정해줄 수 있다.

## 3. Markdown 파일 생성

```markdown
// 파일명 : first-post.md
--- 머리말
title: First-Post
date: "2023-02-28" <- 숫자만 사용하면 newDate()처럼 생성되어 타입 오류 발생 가능

---

# Deploy and test

test
```

Markdown 파일의 데이터를 불러올때, 머리말을 이용한 metaTag 설정이나 제목 등을 자유롭게 설정할 수 있다.

파일 생성 후 해당 링크 접속 시 정상적으로 접속이 가능해진다.

## ex

localhost:3000/first-post

url은 [slug].tsx 파일이 위치한 경로에 따라 달라질 수 있다. (nextjs 라우팅 방식)
