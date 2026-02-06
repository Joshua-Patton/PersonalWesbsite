import { Link, Outlet } from "react-router-dom";
import Nav from '../components/Nav';
import Filter from "../components/Filter";
import '/src/styles/pages/Projects.css';
import ProjectsDisplay from "../components/DisplayProject";


export function Mathematics() { return <ProjectsDisplay tag="mathematics" /> }
export function Data() { return <ProjectsDisplay tag="data" /> }
export function Programming() { return <ProjectsDisplay tag="programming" /> }

const Projects = () => {
  return (
    <div>
      <Nav links={["Mathematics", "Programming", "Data"]} />
      <Outlet />

    </div>
  );
};

export { Projects };