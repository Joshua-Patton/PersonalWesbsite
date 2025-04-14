import { Link , Outlet, useParams} from "react-router-dom";
import Nav from '../components/Nav'


const projects = [
  {tag:"Mathematics", src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"Applyigng conways game of life to a network conditions "},
  {tag:"Mathematics", src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
  {tag:"Mathematics", src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
  {tag:"Mathematics", src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},

  {tag:"WebDesign", src:"src/assets/projectThumbnails/test.png", title:"testtitle", descriptions:"descriptionTest"},

  {tag:"SoftwareDev", src:"src/assets/projectThumbnails/test.png", title:"testtitle", descriptions:"descriptionTest"},
  {tag:"SoftwareDev", src:"src/assets/projectThumbnails/test.png", title:"testtitle", descriptions:"descriptionTest"},

  {tag:"DataScience", src:"src/assets/projectThumbnails/test.png", title:"testtitle", descriptions:"descriptionTest"},

]

export function ProjectFocus(){
  const {name} = useParams();
  return <div className="projectFocus">
      <h1>{name.replaceAll("_"," ")}</h1>
      
    </div>
}

function ProjectsDisplay({ tag }) {
  return (
    <div className="projectsdisplay">
      {projects
        .filter((project) => project.tag === tag) // Filter projects based on the tag
        .map((project, index) => (
          <Link to={project.title.replaceAll(" ","_")} key={index}><img src={project.src} alt="" /><label ><strong>{project.title}</strong><p>{project.descriptions}</p></label></Link>

        ))}
    </div>
  );
}

export function Mathematics(){return <ProjectsDisplay tag="Mathematics" />}
export function WebDesign(){return <ProjectsDisplay tag="WebDesign" />}
export function SoftwareDev(){return <ProjectsDisplay tag="SoftwareDev" />}
export function DataScience(){return <ProjectsDisplay tag="DataScience" />}

const Projects = () => {
  return (
    <div>
        <h1 style={{color:"white"}}>
        <Nav links={["Mathematics","WebDesign","SoftwareDev","DataScience"]}/>
        <Outlet />
        </h1>
    </div>
  );
};

export {Projects};