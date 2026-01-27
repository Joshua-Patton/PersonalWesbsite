import { Link, Outlet} from "react-router-dom";

import "./styles/App.css";

import TitleAnimation from "./components/TitleAnimation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
    return (
    <>
        <div className="App">
            <div className="main">
                <TitleAnimation />
                <div className="content">
                    <Nav links={["about","projects","passions"]}/>
                    <div className="Outlet"><Outlet /></div>
                    <Footer />
                </div>
            </div>
        </div>
        
    </>);
};

export default App;