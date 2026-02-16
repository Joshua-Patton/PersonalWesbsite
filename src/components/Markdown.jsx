import { useLocation, useNavigate } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import "/src/styles/components/markdown.css";
import { getImage } from "../utility/import";
import "katex/dist/katex.min.css";

export function MarkdownPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const content = state?.content ?? "";
  const frontmatter = state?.frontmatter ?? "";

  return (
    <div className="page">
      <div className="markdown">
        <div className="return" onClick={() => navigate(-1)}>
          &#x21A9;
        </div>
        <div className="heading">
          <h1 className="title">{frontmatter.filename}</h1><br />
          <div className="date">{frontmatter.date}</div> <hr />
        </div>
        <ReactMarkdown

          remarkPlugins={[remarkBreaks, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            img({ src, alt }) {
              return (
                <img
                  src={getImage(src)}
                  alt={alt}
                  loading="lazy"
                />
              );
            }
          }}
        >
          {preprocess(content)}
        </ReactMarkdown>
      </div>
    </div >
  );
}


//remove frontmatter
// imgs
function preprocess(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/, "").replace(/\[\[(.*?)\]\]/g, `![$1]($1)`);
}
