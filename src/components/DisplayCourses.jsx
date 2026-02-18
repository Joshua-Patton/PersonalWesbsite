import '../styles/components/DisplayCourses.css'
import { getCoursesMd, getImage } from "../utility/import";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import content from "../content/content.json";
const courses = content["courses"]


export default function DisplayCourses() {
    const { searchQuery = "" } = useOutletContext();
    const query = searchQuery.toLowerCase();
    return (
        <div className="page">
            <div className="coursesdisplay">

                {courses
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
                                    content: getCoursesMd(project.md),
                                    frontmatter: project
                                }}
                                key={index}
                            >
                                <div className="learning-image-container">

                                    <img src={getImage(project.thumbnail)} alt="" />
                                    <div className="hover-text">click to see more</div>
                                </div>

                            </Link>
                        );
                    })}
            </div>
        </div >
    );
}
