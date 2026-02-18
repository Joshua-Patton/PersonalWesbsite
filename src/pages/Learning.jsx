import { Outlet } from "react-router-dom";
import DisplayCourse from "../components/DisplayCourses";
export default function Learning() {

  return (
    <div className="page">
      <div className="learning">
        <Outlet />
      </div>

    </div>
  );
};

