import { Link, useLocation, } from "react-router-dom";

import '../styles/Nav.css';


const Nav = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (<>
        <div className="nav" style={{animation: location.pathname=="/"?"":"navClick 2s forwards"}}>
                    <Link to="projects">
                        <div className="navItem" id="projects"><h1>Projects</h1></div>
                    </Link>
                    <Link  to="passions">
                        <div id="passions" clasName="navItem" > <h1>Passions</h1> </div>
                    </Link>
                    <Link to="about">
                        <div className="navItem" id="about"><h1>about</h1></div>
                    </Link>
                </div>
    </>);
};

export default Nav;