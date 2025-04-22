import { Link , Outlet} from "react-router-dom";
import Nav from '../components/Nav'
import '/src/styles/pages/Passions.css';
import { writings } from "/src/content/passions/writings/writings";
import { summaries } from "../content/passions/summaries/summaries";

import { Timeline } from "/src/components/Timeline";
import { SummaryLink } from "/src/components/SummaryLink";

export function Writings(){
  return <div className="writings">
    <div className="page">
        {writings.map(article => (
            <Link to={article.name} state={{md:article.md}}>
              <div className="article">
                <div className="name">{article.name}</div>
                <div className="tags">{article.tags.map((element)=>(<span className="tag">{element}</span>))}</div>
                <div className="date">{article.date}</div>
              </div>
              <br /><br /><br />
            </Link>
          ))
        }
    </div>
  </div>
}


export function Summaries(){return <div className="summaries">
  <div className="page">
    {summaries.map(summary=>(
      <SummaryLink summary={summary}/>
    ))}
  </div>
</div>
}

export function Personal(){return <div className="personal">
  <div className="page">
    
  </div>
</div>}

export function Notes(){return <div className="notes ">
  <div className="page">
    
  </div>
</div>}


export const Passions = () => {
  return (
    <div>
        <Nav links={["Writings","Summaries","Personal","Notes"]}/>
        <Outlet />
    </div>
  );
};
