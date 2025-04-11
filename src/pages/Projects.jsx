import { Link } from "react-router-dom";
import Nav from '../components/Nav'

const Projects = () => {
  return (
    <div>
        <h1 style={{color:"white"}}>
        <Nav links={["/projects","/about","/passions","/ErrorPage"]}/>
        </h1>
    </div>
  );
};

export default Projects;