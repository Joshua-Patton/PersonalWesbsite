import "/src/styles/components/SummaryLink.css";
import { Link } from "react-router-dom";
import { getBlogMd, getImage } from "../utility/import";

export function DisplaySummaries({ subject, searchQuery, sortValue }) {
    const query = searchQuery.toLowerCase();
    const sort = sortValue.toLowerCase();

    
    const filteredSummaries = subject
        .filter(summary => {
            const filename = summary.filename?.toLowerCase() || "";
            const author = summary.author?.toLowerCase() || "";
            const type = summary.type?.toLowerCase() || "";
            const rating = summary.rating?.toLowerCase() || "";
            const date = summary.date?.toLowerCase() || "";
            const description = summary.description?.toLowerCase() || "";
            const tags = summary.tags?.map(t => t.toLowerCase()) || [];

            return (
                filename.includes(query) ||
                author.includes(query) ||
                type.includes(query) ||
                rating.includes(query) ||
                date.includes(query) ||
                description.includes(query) ||
                tags.some(t => t.includes(query))
            );
        }
        );
    //apply sort
    const sortedSummaries = filteredSummaries.sort((a, b) => {
        switch (sort) {
            case "newest":
                return new Date(b.date) - new Date(a.date);

            case "oldest":
                return new Date(a.date) - new Date(b.date);

            case "title":
                return a.filename.localeCompare(b.filename);

            case "author":
                return a.author.localeCompare(b.author);

            default:
                return 0;
        }
    });


    return (
        <div className="summaries">
            {sortedSummaries.map((summary, index) => (
                <div className="summary" key={index + summary.author + summary.title}>
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
                                    <span className="value">
                                        {new Date(summary.date).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}</span>
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
