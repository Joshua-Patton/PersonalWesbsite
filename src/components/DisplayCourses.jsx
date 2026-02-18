import { Link } from "react-router-dom";
import '../styles/pages/Learning.css'
export default function DisplayCourses() {
    const courses = [
        {
            name: "practical React framework for the working web developer(underdevelopment)",
            componentName: "ReactCourse"
        }
    ]

    return (
        <>
            <div className="info-text">
                <h1>pedagogical philosophy</h1>
                Whilst attempting to teach myself, I found many resources both online and at university - to be inadequate for how I wanted to learn. The rigidity of the material, in both content and tools, its lack of real-world application, and the tendency to spoon-feed questions and answers rather than allow students to consider for themselves independently.

                I wanted to build something different. These courses are self-paced (within reasonable guidance) and designed to “throw you in the deep end.” The focus is on solving and creating problems yourself, constructing your own contexts, and constantly asking how the material applies in the real world as it actually exists.

                I also supplement the core material with Anki decks so that memory can be trained separately rather than confused with understanding. Memory is important, but in formal education it often takes the wheel, and makes a computer out of what could be a truly creative person.


            </div>
            <br />
            <h1 >Courses</h1>
            <div className="courses">
                {courses.map(course => (
                    <Link key={course.name} to={course.componentName} className="course-card">
                        {course.name}
                    </Link>
                ))}
            </div>

        </>
    )
}
