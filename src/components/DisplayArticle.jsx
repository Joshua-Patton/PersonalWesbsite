import { getBlogMd } from "../utility/import";
import { Link } from "react-router-dom";

export function DisplayArticle({ subject, searchQuery, sortValue }) {
    const query = searchQuery.toLowerCase();
    const sort = sortValue.toLowerCase();
    const sortFunctions = {
        newest: (a, b) => new Date(b.date) - new Date(a.date),
        oldest: (a, b) => new Date(a.date) - new Date(b.date),
        title: (a, b) => a.filename.localeCompare(b.filename),
    };


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
                .sort(sortFunctions[sort] || (() => 0))
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
                            <div className="date">
                                {new Date(article.date).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </div>

                        </div>
                    </Link>
                ))}
        </div>
    );
}