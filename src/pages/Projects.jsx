import { Link , Outlet, useParams} from "react-router-dom";
import Nav from '../components/Nav'
import "../styles/Projects.css"


const projects = [
  {tag:"Mathematics", 
    Projects:[
      { src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", 
        descriptions:"Applyigng conways game of life to a network conditions "},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"}
    ]
  },
  {tag:"webdesign", 
    Projects:[
      { src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", 
        descriptions:"Applyigng conways game of life to a network conditions "},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"}
    ]
  },

  {tag:"softwaredev", 
    Projects:[
      { src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", 
        descriptions:"Applyigng conways game of life to a network conditions "},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"}
    ]
  },

  {tag:"datascience", 
    Projects:[
      { src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", 
        descriptions:"Applyigng conways game of life to a network conditions "},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"},
      {src:"src/assets/projectThumbnails/test.png", title:"Conways game of life on a network", descriptions:"descriptionTest"}
    ]
  },
]

export function ProjectFocus(){
  const {name} = useParams();
  return <div className="projectFocus">
      <h1>{name.replaceAll("_"," ")}</h1>
      
    </div>
}
console.log(projects);
function ProjectsDisplay({ tag }) {
  return (
    <div className="projectsdisplay">
      {projects
        .filter((project) => project.tag === tag)
        .flatMap((filteredProject)=>filteredProject.Projects)
        .map((project, index) => {
          return(
          <Link to={project.title.replaceAll(" ","_")} key={index}>
            <div className="image-container">
              <img src={project.src} alt="" />
              <div className="hover-text">click on to see more</div>
            </div>
              <label >
                <strong>{project.title}</strong>
                <p>{project.descriptions}</p>
            </label>
          </Link>

        )})}
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