import { Link, Outlet } from "react-router-dom";
import Nav from '../components/Nav'
import '/src/styles/pages/Blog.css';

import content from "/src/content/content.json";
const writings = content["writings"]
const art = content["art"]
const reviews = content["reviews"]



import { SummaryLink } from "/src/components/SummaryLink";



function DisplayArticles({ subject }) {
  return <div className="articles">
    {subject.map((article) => (
      <Link key={article.filename + article.date} to={article.filename.replaceAll(" ", "_")} state={{ md: article.md }} >
        <div className="article">
          <div className="name">{article.filename}</div>
          <div className="tags">
            {article.tags?.map((element, index) => (<span key={index} className="tag">{element}</span>))}
          </div>
          <div className="date">{article.date}</div>
        </div>
      </Link>
    ))
    }
  </div>
}



export function Writings() {
  return <div className="writings">
    <div className="page">
      <DisplayArticles subject={writings} />
    </div>
  </div>
}


export function Reviews() {
  return <div className="reviews">
    <div className="page">
      {reviews.map(summary => (
        <SummaryLink key={summary.title + summary.author} summary={summary} />
      ))}
    </div>
  </div>
}

export function Art() {
  return <div className="art">
    <div className="page">
      <DisplayArticles subject={art} />
    </div>
  </div>
}



export const Blog = () => {
  return (
    <div>
      <Nav links={["Writings", "Reviews", "Art"]} />
      <Outlet />
    </div>
  );
};
