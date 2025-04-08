import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "..\\styles\\hp.css";
import Grid from "../components/Grid";

const App = () => {
  return (
    <>
        <div className="App">
            <div className="title-container">
                <div id="left"></div>
                <div className="box">
                    <p className="title" id="name">Joshua Patton</p>
                    <br />
                    <div className="title-sub-container"><p className="title-sub" id="w">- web designer</p></div>
                    <div className="title-sub-container"><p className="title-sub" id="s">- software dev</p></div>
                    <div className="title-sub-container"><p className="title-sub" id="m">- mathematician</p></div>
                    <div className="title-sub-container"><p className="title-sub" id="a">- adventurer</p></div>
                </div>
                <div id="right"></div>
            </div>
            <div className="main">
                <div className="nav">
                    <Link>
                        <div className="navItem" id="projects">
                           <h1>Projects</h1>
                        </div>
                    </Link>
                    <Link to="passions">
                        <div className="navItem" id="passions">
                            <h1>Passions</h1>
                        </div>
                    </Link>
                    <Link>
                        <div className="navItem" id="about">
                            <h1>about</h1>
                        </div>
                    </Link>
                </div>
            </div>
         </div>
         <Outlet />
    </>);
};

export default App;