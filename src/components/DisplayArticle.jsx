import { getBlogMd } from "../utility/import";
import { Link } from "react-router-dom";

export function DisplayArticle({ subject, searchQuery }) {
    const query = searchQuery.toLowerCase();

    return (
        <div className="articles">
            {subject
                // filter by search query across filename, date, and tags
                .filter(article => {
                    const title = article.filename?.toLowerCase() || "";
                    const date = article.date?.toLowerCase() || "";
                    const tags = article.tags?.map(t => t.toLowerCase()) || [];

                    return (
                        title.includes(query) ||
                        date.includes(query) ||
                        tags.some(t => t.includes(query))
                    );
                })
                .map((article, index) => (
                    <Link
                        key={index}
                        to={article.filename.replaceAll(" ", "_")}
                        state={{
                            content: getBlogMd(article.md),
                            frontmatter: article
                        }}
                    >
                        <div className="article">
                            <div className="name">{article.filename}</div>
                            <div className="tags">
                                {article.tags?.map((element, idx) => (
                                    <span key={idx} className="tag">{element}</span>
                                ))}
                            </div>
                            <div className="date">{article.date}</div>
                        </div>
                    </Link>
                ))}
        </div>
    );
}