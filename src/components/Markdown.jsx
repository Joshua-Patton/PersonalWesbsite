import { useLocation, useNavigate } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";

import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";

import "/src/styles/components/markdown.css";
import "katex/dist/katex.min.css";

import { getImage } from "../utility/import";

export function MarkdownPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const content = state?.content ?? "";
  const frontmatter = state?.frontmatter ?? {};

  return (
    <div className="page">
      <div className="markdown">

        <div className="return" onClick={() => navigate(-1)}>
          &#x21A9;
        </div>

        <div className="heading">
          <h1 className="title">{frontmatter.filename}</h1>
          <div className="date">{frontmatter.date}</div>
          <hr />
        </div>

        <div className="content">
          <ReactMarkdown
            remarkPlugins={[remarkBreaks, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeSlug]}
            components={{

              a({ href, children }) {

                if (href?.startsWith("#")) {
                  return (
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();

                        const el = document.getElementById(
                          href.substring(1)
                        );

                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {children}
                    </a>
                  );
                }

                return <a href={href}>{children}</a>;
              },

              // 🔥 Your original image behaviour preserved
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

      </div>
    </div>
  );
}


function preprocess(markdown) {
  return markdown
    // Remove frontmatter
    .replace(/^---[\s\S]*?---\s*/, "")

    // 1️⃣ Convert image embeds FIRST
    // ![[image.png]] → ![](image.png)
    .replace(/!\[\[(.*?)\]\]/g, (_, src) => {
      return `![](${src})`;
    })

    // 2️⃣ Convert internal heading links only
    // [[#Heading Name]] → [Heading Name](#heading-name)
    .replace(/\[\[#(.+?)\]\]/g, (_, heading) => {
      const slug = heading
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      return `[${heading}](#${slug})`;
    });

}