import content from "../content/content.json";
const projects = content["projects"]
import { getImage, getProjectMd } from "../utility/import";
import { Link } from "react-router-dom";


export default function ProjectsDisplay({ tag }) {
  return (
    <div className="page">
      <div className="projectsdisplay">
        {projects
          .filter((project) => project.tags?.includes(tag))
          .map((project, index) => {// match "myimage.jpg"
            return (

              <Link
                to={project.filename?.replaceAll(" ", "_")}
                state={{
                  content: getProjectMd(project.md),
                  frontmatter: project
                }}
                key={index}
              >
                <div className="image-container">

                  <img src={getImage(project.thumbnail)} alt="" />
                  <div className="hover-text">click to see more</div>
                </div>
                <label>
                  <p className="description">
                    <strong>{project.description}</strong><br />
                  </p>
                </label>
              </Link>
            );
          })}
      </div>
    </div >
  );
}
