import content from "../content/content.json";
const projects = content["projects"]
console.log("projects:", projects);


import { Link } from "react-router-dom";
// const thumbnails = import.meta.glob('/src/assets/projectThumbnails/*.png', { eager: true });
const contentFolderPath = "../content/"

export default function ProjectsDisplay({ tag }) {
  return (
    <div className="page">
      <div className="projectsdisplay">
        {projects
          .filter((project) => project.tags?.includes(tag))
          .map((project, index) => {// match "myimage.jpg"
            console.log("working until this point")
            return (

              <Link
                to={project.filename?.replaceAll(" ", "_")}
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
