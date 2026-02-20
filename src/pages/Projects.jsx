import { Link, Outlet } from "react-router-dom";
import Nav from '../components/Nav';
import { Filter } from "../components/Filter";
import '/src/styles/pages/Projects.css';
import ProjectsDisplay from "../components/DisplayProject";
import { useState } from "react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div>
      <Filter query={searchQuery} onQueryChange={setSearchQuery} sort={sort} onSortChange={setSort} />
      <Outlet context={{ searchQuery, sort }} />
    </div>
  );
};

export { Projects };
