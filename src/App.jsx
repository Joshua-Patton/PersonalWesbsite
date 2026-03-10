import { Link, Outlet } from "react-router-dom";

import "./styles/App.css";
import "./styles/fonts.css";

import Title from "./components/Title";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";
function isDay() {
    const now = new Date();
    const hours = now.getHours();
    return (hours > 6 && hours < 18)
}
const App = () => {
    const [theme, setTheme] = useState(isDay() ? "day" : "night")
    function handlethemebuttonclick() {
        setTheme(prev => prev == "day" ? "night" : "day")
    }

    return (
        <>
            <div className="App"
                theme={theme}
            >
                <div className="main">
                    <button theme={theme} id="themeButton" onClick={handlethemebuttonclick}>{theme}</button>
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