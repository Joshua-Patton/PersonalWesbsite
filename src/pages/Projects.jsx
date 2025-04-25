import { Link , Outlet} from "react-router-dom";
import Nav from '../components/Nav';
import Filter from "../components/Filter";
import '/src/styles/pages/Projects.css';
import ProjectsDisplay from "../components/DisplayProject";


export function Mathematics(){return <ProjectsDisplay tag="mathematics" />}
export function WebDesign(){return <ProjectsDisplay tag="webdesign" />}
export function SoftwareDev(){return <ProjectsDisplay tag="softwaredev" />}
export function DataScience(){return <ProjectsDisplay tag="datascience" />}

const Projects = () => {
  return (
    <div>
        <Nav links={["Mathematics","WebDesign","SoftwareDev","DataScience"]}/>
        <Outlet />

    </div>
  );
};

export {Projects};