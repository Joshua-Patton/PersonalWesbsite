import { Link, } from "react-router-dom";
import { Outlet } from "react-router-dom";


import "./styles/App.css";

import TitleAnimation from "./components/TitleAnimation";
import Nav from "./components/Nav";


const App = () => {


  return (
    <>
        <div className="App">
            <TitleAnimation />
            <div className="main">
                <Nav />
                <div className="Outlet">
                    <Outlet />
                </div>
            </div>
         </div>


    </>);
};

export default App;