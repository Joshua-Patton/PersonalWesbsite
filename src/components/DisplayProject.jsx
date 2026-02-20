
import { getImage, getProjectMd } from "../utility/import";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import content from "../content/content.json";
const projects = content["projects"]


export default function ProjectsDisplay() {
  const { searchQuery = "" } = useOutletContext();
  const { sort = "" } = useOutletContext();
  const query = searchQuery.toLowerCase();
  const sortFunctions = {
    newest: (a, b) => new Date(b.date) - new Date(a.date),
    oldest: (a, b) => new Date(a.date) - new Date(b.date),
    title: (a, b) => a.filename.localeCompare(b.filename),
  };

  return (
    <div className="page">
      <div className="projectsdisplay">

        {projects
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
          .sort(sortFunctions[sort] || (() => 0))
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
