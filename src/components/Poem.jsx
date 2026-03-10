export default function Poem({children, title, date}){
    return (
        <div className="poem">
            <div className="title">{title}</div>
            <div className="content">{children}</div>
            <div className="date">{date}</div>
        </div>
)}