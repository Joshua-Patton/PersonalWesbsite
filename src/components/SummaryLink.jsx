import "/src/styles/components/SummaryLink.css"
import { Link } from "react-router-dom"
import { getBlogMd, getImage } from "../utility/import"

export function SummaryLink({ summary }) {
    return <div className="summary" >
        <Link to={summary.filename}
            state={{
                content: getBlogMd(summary.md),
                frontmatter: summary
            }} >
            <div className="title">{summary.title}</div>
            <div className="book">
                <img src={getImage(summary.thumbnail)} alt="" />
                <div className="info">
                    <div className="info-type">type: <span className="details">{summary.type}</span></div>
                    <div className="info-author">author: <span className="details">{summary.author}</span></div>
                    <div className="info-rating">rating: <span className="details">{summary.rating}</span></div>
                    <div className="info-dateRead">date read: <span className="details">{summary.dateread}</span></div>
                    <div className="info-description">description: <br /><span className="details">{summary.description}</span></div></div>
                <div className="hover-text">click to read more</div>
            </div>
        </Link>
    </div>
}