'use client'
import hljs from "highlight.js";
import Markdown from "markdown-to-jsx";
import { useEffect } from "react";

interface MarkdownRendererProps {
  post: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ post }) => {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("pre code");
    codeBlocks.forEach((codeBlock) => {
      hljs.highlightElement(codeBlock as HTMLElement);
    });
  }, [post]);

  return <Markdown>{post}</Markdown>;
};

export default MarkdownRenderer