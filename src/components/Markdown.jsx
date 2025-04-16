import { useEffect , useState} from "react";
import { useLocation, Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/markdown.css";

export function MarkdownPage(){
    let [content,setContent] = useState();
    const {state} = useLocation();
    useEffect(()=>{
      fetch(state.md)
      .then((response)=>response.text())
      .then((text)=>setContent(text))
    }, [])
      return(
        <div className="page">
          <Link to="/projects/Mathematics/">go back</Link>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>)
}
      