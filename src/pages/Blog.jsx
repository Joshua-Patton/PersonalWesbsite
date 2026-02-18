import { Link, Outlet } from "react-router-dom";
import Nav from '../components/Nav'
import '/src/styles/pages/Blog.css';
import { useState } from "react";
import { Filter } from "../components/Filter";


import content from "/src/content/content.json";
const writings = content["writings"]
const reviews = content["reviews"]

import { DisplaySummaries } from "../components/DisplaySummaries";
import { DisplayArticle } from "../components/DisplayArticle";

export function Writings() {

  const [searchQuery, setSearchQuery] = useState("");
  return <>
    <Filter query={searchQuery} onQueryChange={setSearchQuery} />
    <div className="writings">
      <div className="page">
        <DisplayArticle subject={writings} searchQuery={searchQuery} />
      </div>
    </div>
  </>
}

export function Reviews() {
  const [searchQuery, setSearchQuery] = useState("");
  return <>
    <Filter query={searchQuery} onQueryChange={setSearchQuery} />
    <div className="reviews">
      <div className="page">
        <DisplaySummaries subject={reviews} searchQuery={searchQuery} />
      </div>
    </div>
  </>
}






export const Blog = () => {
  const [searchQuery] = useState("");
  return (
    <div>
      <Nav links={["Writings", "Reviews", "Art"]} />
      <Outlet context={{ searchQuery }} />
    </div>
  );
};
