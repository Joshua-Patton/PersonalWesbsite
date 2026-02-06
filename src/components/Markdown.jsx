import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import "/src/styles/components/markdown.css";

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
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>
          {stripFrontmatter(content)}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function stripFrontmatter(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/, "");
}
