import "/src/styles/components/SummaryLink.css";
import { Link } from "react-router-dom";
import { getBlogMd, getImage } from "../utility/import";

export function DisplaySummaries({ subject, searchQuery, tag }) {
    const query = searchQuery.toLowerCase();

    const filteredSummaries = subject
        // filter by tag if provided
        .filter(summary => tag ? summary.tags?.includes(tag) : true)
        // filter by search query across multiple fields
        .filter(summary => {
            const title = summary.title?.toLowerCase() || "";
            const author = summary.author?.toLowerCase() || "";
            const type = summary.type?.toLowerCase() || "";
            const rating = summary.rating?.toLowerCase() || "";
            const dateRead = summary.dateread?.toLowerCase() || "";
            const description = summary.description?.toLowerCase() || "";
            const tags = summary.tags?.map(t => t.toLowerCase()) || [];

            return (
                title.includes(query) ||
                author.includes(query) ||
                type.includes(query) ||
                rating.includes(query) ||
                dateRead.includes(query) ||
                description.includes(query) ||
                tags.some(t => t.includes(query))
            );
        });

    return (
        <div className="summaries">
            {filteredSummaries.map((summary, index) => (
                <div className="summary" key={index}>
                    <Link
                        to={summary.filename?.replaceAll(" ", "_")}
                        state={{
                            content: getBlogMd(summary.md),
                            frontmatter: summary
                        }}
                    >
                        <div className="title">{summary.title}</div>
                        <div className="book">
                            <img src={getImage(summary.thumbnail)} alt="" />
                            <div className="info">
                                <div className="info-type">
                                    type: <span className="details">{summary.type}</span>
                                </div>
                                <div className="info-author">
                                    author: <span className="details">{summary.author}</span>
                                </div>
                                <div className="info-rating">
                                    rating: <span className="details">{summary.rating}</span>
                                </div>
                                <div className="info-dateRead">
                                    date read: <span className="details">{summary.dateread}</span>
                                </div>
                                <div className="info-description">
                                    description: <br />
                                    <span className="details">{summary.description}</span>
                                </div>
                            </div>
                            <div className="hover-text">click to read more</div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}