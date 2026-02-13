import { Link, Outlet, useOutletContext } from "react-router-dom";
import Nav from '../components/Nav';
import { Filter } from "../components/Filter";
import '/src/styles/pages/Projects.css';
import ProjectsDisplay from "../components/DisplayProject";
import { useState } from "react";

export function Mathematics() {
  const { searchQuery } = useOutletContext();
  return <ProjectsDisplay tag="mathematics" searchQuery={searchQuery} />;
}
export function Programming() {
  const { searchQuery } = useOutletContext();
  return <ProjectsDisplay tag="Programming" searchQuery={searchQuery} />;
}
export function Data() {
  const { searchQuery } = useOutletContext();
  return <ProjectsDisplay tag="Data" searchQuery={searchQuery} />;
}
const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Nav links={["Mathematics", "Programming", "Data"]} />
      <Filter query={searchQuery} onQueryChange={setSearchQuery} />
      <Outlet context={{ searchQuery }} />

    </div>
  );
};

export { Projects };