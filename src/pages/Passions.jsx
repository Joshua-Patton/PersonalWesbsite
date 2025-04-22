import { Link , Outlet} from "react-router-dom";
import Nav from '../components/Nav'
import '/src/styles/pages/Passions.css';
import { writings } from "/src/content/passions/writings/writings";


export function Writings(){
  return <div className="writings">
    <div className="page">
        {writings.map(article => (
            <Link to={article.name} state={{md:article.md}}>
              <div className="article">
                <span className="name">{article.name}</span>
                <div className="date">{article.date}</div>
                <div className="description">{article.description}</div>
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
