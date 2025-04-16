import { useEffect , useState} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import '/src/styles/components/markdown.css';

export function MarkdownPage(){
    let [content,setContent] = useState("");
    const location = useLocation();
    const state = location.state;
    const path = location.pathname
    const navigate = useNavigate();
    console.log(location)
    useEffect(()=>{
      fetch(state.md)
      .then((response)=>response.text())
      .then((text)=>setContent(text))
    }, [])
      return(
        <div className="page">
          <div className="return" onClick={()=>navigate(-1)}>&#x21A9;</div>
          <div className="markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>)
}
      