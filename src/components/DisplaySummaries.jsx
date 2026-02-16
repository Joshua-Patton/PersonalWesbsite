import "/src/styles/components/SummaryLink.css";
import { Link } from "react-router-dom";
import { getBlogMd, getImage } from "../utility/import";

export function DisplaySummaries({ subject, searchQuery, tag }) {
    const query = searchQuery.toLowerCase();

    const filteredSummaries = subject
        .filter(summary => tag ? summary.tags?.includes(tag) : true)
        .filter(summary => {
            const filename = summary.filename?.toLowerCase() || "";
            const author = summary.author?.toLowerCase() || "";
            const type = summary.type?.toLowerCase() || "";
            const rating = summary.rating?.toLowerCase() || "";
            const dateRead = summary.dateread?.toLowerCase() || "";
            const description = summary.description?.toLowerCase() || "";
            const tags = summary.tags?.map(t => t.toLowerCase()) || [];

            return (
                filename.includes(query) ||
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
                        className="card-link"
                    >
                        <div className="title">{summary.filename}</div>

                        <div className="book">
                            <img
                                src={getImage(summary.thumbnail)}
                                alt={`${summary.filename} cover`}
                                className="cover"
                            />

                            <div className="info">
                                <div className="info-row">
                                    <span className="label">Type</span>
                                    <span className="value">{summary.type}</span>
                                </div>

                                <div className="info-row">
                                    <span className="label">Author</span>
                                    <span className="value">{summary.author}</span>
                                </div>

                                <div className="info-row">
                                    <span className="label">Rating</span>
                                    <span className="value">{summary.rating}</span>
                                </div>

                                <div className="info-row">
                                    <span className="label">Date</span>
                                    <span className="value">{summary.dateread}</span>
                                </div>

                                <div className="description">
                                    {summary.description}
                                </div>
                            </div>

                            <div className="hover-text">
                                Click to read →
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
