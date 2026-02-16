import { Link, Outlet, useOutletContext } from "react-router-dom";
import Nav from '../components/Nav'
import '/src/styles/pages/Blog.css';
import { useState } from "react";
import { Filter } from "../components/Filter";


import content from "/src/content/content.json";
const writings = content["writings"]
const art = content["art"]
const reviews = content["reviews"]

import { DisplaySummaries } from "../components/DisplaySummaries";
import { DisplayArticle } from "../components/DisplayArticle";

export function Writings() {
  const { searchQuery } = useOutletContext();
  return <div className="writings">
    <div className="page">
      <DisplayArticle subject={writings} searchQuery={searchQuery} />
    </div>
  </div>
}

export function Reviews() {
  const { searchQuery } = useOutletContext();
  return <div className="reviews">
    <div className="page">
      <DisplaySummaries subject={reviews} searchQuery={searchQuery}/>
    </div>
  </div>
}



export function Art() {
  const { searchQuery } = useOutletContext();
  return <div className="art">
    <div className="page">
      <DisplayArticle subject={art} searchQuery={searchQuery} />
    </div>
  </div>
}



export const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Nav links={["Writings", "Reviews", "Art"]} />
      <Filter query={searchQuery} onQueryChange={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
    </div>
  );
};
