
import DisplayCourse from "../components/DisplayCourses";
import { Link, Outlet } from "react-router-dom";
import Nav from '../components/Nav';
import { Filter } from "../components/Filter";

import ProjectsDisplay from "../components/DisplayProject";
import { useState } from "react";


const Learning = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  return (
    <div>
      <Filter query={searchQuery} onQueryChange={setSearchQuery} sort={sort} onSortChange={setSort} />
      <Outlet context={{ searchQuery, sort }} />
    </div>
  );
};

export { Learning };
