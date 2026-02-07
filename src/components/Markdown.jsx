import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import "/src/styles/components/markdown.css";
import { getImage } from "../utility/import";

export function MarkdownPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const content = state?.md ?? "";

  return (
    <div className="page">
      <div className="return" onClick={() => navigate(-1)}>
        &#x21A9;
      </div>

      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
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
  return markdown.replace(/^---[\s\S]*?---\s*/, "").replace(/\[\[(.*?)\]\]/g, `![image]($1)`);
}
