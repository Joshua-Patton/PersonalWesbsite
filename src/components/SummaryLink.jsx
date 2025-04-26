import "/src/styles/components/SummaryLink.css"
import { Link } from "react-router-dom"
const thumbnails = import.meta.glob('/src/assets/passions/summaryThumbnails/*.png', { eager: true });

export function SummaryLink({summary}){
    return <div className="summary" >
        <Link to={summary.md} >
            <div className="title">{summary.title}</div>
            <div className="book">
                <img src={thumbnails[summary.thumbnail]?.default} alt="" />
                <div className="info">
                    <div className="type">type: <span className="details"><br />{summary.medium}</span></div>
                    <div className="author">author: <span className="details"> <br />{summary.author}</span></div>
                    <div className="rating">rating: <span className="details"><br />{summary.rating}</span></div>
                    <div className="dateRead">date read: <span className="details"><br />{summary.dateRead}</span></div>
                    <div className="description">description: <br /><span className="details">{summary.description}</span></div></div>
            </div>
        </Link>
    </div>
}