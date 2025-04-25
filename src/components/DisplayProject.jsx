import.meta.glob('/src/assets/projectThumbnails/*.png');
import { projects } from "../content/projects/projects";
import { Link } from "react-router-dom";

export default function ProjectsDisplay({ tag }) {
    return (
      <div className="page">
        <div className="projectsdisplay">
          {projects
            .filter((project) => project.tag === tag)
            .flatMap((filteredProject) => filteredProject.Projects)
            .map((project, index) => {// match "myimage.jpg"
              return (
                <Link
                  to={project.title.replaceAll(" ", "_")}
                  state={{ md: project.md }}
                  key={index}
                >
                  <div className="image-container">
                    <img src={project.thumbnail} alt="" />
                    <div className="hover-text">click to see more</div>
                  </div>
                  <label>
                    <strong>{project.title}</strong>
                    <p className="description">{project.descriptions}</p>
                  </label>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
  