import { Link , Outlet} from "react-router-dom";
import Nav from '../components/Nav'
import '/src/styles/pages/Projects.css';


const projects = [
  {tag:"mathematics", 
    Projects:[
      { 
        title:"Conways game of life on a network",
        thumbnail:"/src/assets/projectThumbnails/conway.png", 
        md: "/src/content/projects/conways_game_of_life.md",
        descriptions:"Applying conways game of life to a network conditions ",
        date:"november 2024",
      },
     ]
  },
  {tag:"webdesign", 
    Projects:[
      { 
        title:"This Website",
        thumbnail:"/src/assets/projectThumbnails/test.png",  
        descriptions:"Applyigng conways game of life to a network conditions ",
        md: "/src/content/test.md"
      },
    ]
  },

  {tag:"softwaredev", 
    Projects:[
      { 
        title:"Billiard Physics Simulation in C+",
        thumbnail:"/src/assets/projectThumbnails/test.png",  
        descriptions:"Applyigng conways game of life to a network conditions ",
        md: "/src/content/test.md"
      },
    ]
  },

  {tag:"datascience", 
    Projects:[
      { 
        title:"Ifixit ontology",
        thumbnail:"/src/assets/projectThumbnails/test.png",  
        descriptions:"Applyigng conways game of life to a network conditions ",
        md: "/src/content/test.md"
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
            <Link to={project.title.replaceAll(" ","_")} state={{md:project.md}} key={index}>
              <div className="image-container">
                <img src={project.thumbnail} alt="" />
                <div className="hover-text">click to see more</div>
              </div>
                <label >
                  <strong>{project.title}</strong>
                  <p className="description">{project.descriptions}</p>
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