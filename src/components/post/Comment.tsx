import { useEffect } from "react";

export const Comment = () => {
  const makeRef = (el: HTMLElement | null) => {
    if (!el) {
      return;
    } else {
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.setAttribute("repo", "LEE-YO-HAN/github.io.utterances");
      scriptElem.setAttribute("issue-term", "pathname");
      scriptElem.setAttribute("theme", "github-dark");
      scriptElem.setAttribute("label", "blog-comment");
      scriptElem.crossOrigin = "anonymous";
      el.appendChild(scriptElem);
    }
  };

  useEffect(() => {
    const newEl = document.getElementById("comment-box");
    makeRef(newEl);
  }, []);

  return <section id="comment-box" />;
};
