import { Link, Outlet, useLocation} from "react-router-dom";

import "./styles/App.css";

import TitleAnimation from "./components/TitleAnimation";
import Nav from "./components/Nav";

function Footer(){
    let location = useLocation();
    return <div className="footer" style={{
        display: location.pathname=="/"?"none":"block"
    }}>
        <p>footer
            asd
            asd
        </p>
        </div>
}

const App = () => {
    return (
    <>
        <div className="App">
            <TitleAnimation />
            <div className="main">
                <div className="content">
                    <Nav links={["about","projects","passions"]}/>
                    <div className="Outlet"><Outlet /></div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    </>);
};

export default App;