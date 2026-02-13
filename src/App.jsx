import { Link, Outlet } from "react-router-dom";

import "./styles/App.css";
import "./styles/fonts.css";

import Title from "./components/Title";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className="App">
                <div className="main">
                    <Title />
                    <div className="content">
                        <Nav links={["about", "projects", "Blog", "learning"]} />
                        <div className="Outlet"><Outlet /></div>
                        <Footer />
                    </div>
                </div>
            </div>

        </>);
};

export default App;