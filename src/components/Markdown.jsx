import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import '/src/styles/components/markdown.css';
const contentFolderPath = "/src/content/"

export function MarkdownPage() {
  let [content, setContent] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(location)
  console.log(contentFolderPath + state.md)
  useEffect(() => {
    fetch(state.md)
      .then((response) => response.text())
      .then((text) => setContent(text))
  }, [])
  return (
    <div className="page">
      <div className="return" onClick={() => navigate(-1)}>&#x21A9;</div>
      <div className="markdown">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>
          {format(content)}
        </ReactMarkdown>
      </div>
    </div>)
}

function format(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/, '');
}