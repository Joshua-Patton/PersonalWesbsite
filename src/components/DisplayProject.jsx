import content from "../content/content.json";
const projects = content["projects"]
import { getImage, getProjectMd } from "../utility/import";
import { Link } from "react-router-dom";


export default function ProjectsDisplay({ tag, searchQuery }) {
  const query = searchQuery.toLowerCase();
  return (
    <div className="page">
      <div className="projectsdisplay">

        {projects
          .filter(project => project.tags?.includes(tag))
          .filter(project => {
            const title = project.filename?.toLowerCase() || "";
            const date = project.date?.toLowerCase() || "";
            const tags = project.tags?.map(t => t.toLowerCase()) || [];

            return (
              title.includes(query) ||
              date.includes(query) ||
              tags.some(t => t.includes(query))
            );
          })
          .map((project, index) => {
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
                  <div id="project-title">{project.filename}</div>
                </label>

              </Link>
            );
          })}
      </div>
    </div >
  );
}
