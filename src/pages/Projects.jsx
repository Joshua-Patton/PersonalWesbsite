import { Link , Outlet} from "react-router-dom";
import Nav from '../components/Nav'
import "../styles/Projects.css"


const projects = [
  {tag:"mathematics", 
    Projects:[
      { 
        title:"Conways game of life on a network",
        thumbnail:"/src/assets/projectThumbnails/test.png",  
        descriptions:"Applyigng conways game of life to a network conditions ",
        md: "/src/content/test.md"
      },
     ]
  },
  {tag:"webdesign", 
    Projects:[
      { 
        title:"Conways game of life on a network",
        src:"src/assets/projectThumbnails/test.png",  
        descriptions:"Applyigng conways game of life to a network conditions "
      },
    ]
  },

  {tag:"softwaredev", 
    Projects:[
      { 
        title:"Conways game of life on a network",
        src:"src/assets/projectThumbnails/test.png",  
        descriptions:"Applyigng conways game of life to a network conditions "
      },
    ]
  },

  {tag:"datascience", 
    Projects:[
      { 
        title:"Conways game of life on a network",
        src:"src/assets/projectThumbnails/test.png",  
        descriptions:"Applyigng conways game of life to a network conditions "
      },
    ]
  }
]

function ProjectsDisplay({ tag }) {
  return (
    <div className="page">
      <div className="projectsdisplay">
        {projects
          .filter((project) => project.tag === tag)
          .flatMap((filteredProject)=>filteredProject.Projects)
          .map((project, index) => {
            return(
            <Link to={project.title.replaceAll(" ","_")} key={index}>
              <div className="image-container">
                <img src={project.thumbnail} alt="" />
                <div className="hover-text">click on to see more</div>
              </div>
                <label >
                  <strong>{project.title}</strong>
                  <p>{project.descriptions}</p>
              </label>
            </Link>
          )})}
      </div>
    </div>
  );
}

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