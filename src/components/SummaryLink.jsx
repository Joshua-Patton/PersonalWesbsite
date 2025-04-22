import "/src/styles/components/SummaryLink.css"
import { Link } from "react-router-dom"
export function SummaryLink({summary}){
    return <div className="summary" >
        <Link to={summary.md} ><img src={summary.thumbnail} alt="" /></Link>
        <div className="info">
        <div className="author">{summary.medium}</div>
            <div className="title">{summary.title}</div>
            <div className="author">{summary.author}</div>
            <div className="author">{summary.rating}</div>
            <div className="author">{summary.dateRead}</div>
            
        </div>
    </div>
}