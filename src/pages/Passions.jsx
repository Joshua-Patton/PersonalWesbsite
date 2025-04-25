import { Link , Outlet} from "react-router-dom";
import Nav from '../components/Nav'
import '/src/styles/pages/Passions.css';

import { writings } from "/src/content/passions/writings/writings";
import { summaries } from "/src/content/passions/summaries/summaries";
import { personal } from "/src/content/passions/personal/personal";
import { notes } from "/src/content/passions/notes/notes";

import { Timeline } from "/src/components/Timeline";
import { SummaryLink } from "/src/components/SummaryLink";

function DisplayArticles({subject}){
  return <div className="articles">
    {subject.map((article) => (
        <Link key={article.name+article.date} to={article.name} state={{md:article.md}} >
          <div className="article">
            <div className="name">{article.name}</div>
            <div className="tags">
              {article.tags?.map((element,index)=>(<span key={index} className="tag">{element}</span>))}
            </div>
            <div className="date">{article.date}</div>
          </div>
        </Link>
      ))
    }
  </div>
}



export function Writings(){
  return <div className="writings">
    <div className="page">
      <DisplayArticles subject={writings}/>
    </div>
  </div>
}


export function Summaries(){return <div className="summaries">
  <div className="page">
    {summaries.map(summary=>(
      <SummaryLink key={summary.title + summary.author} summary={summary}/>
    ))}
  </div>
</div>
}

export function Personal(){return <div className="personal">
  <div className="page">
    <DisplayArticles subject={personal}/>
  </div>
</div>}

export function Notes(){return <div className="notes ">
  <div className="page">
    <DisplayArticles subject={notes}/>
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
