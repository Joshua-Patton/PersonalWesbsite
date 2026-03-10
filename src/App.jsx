import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import "./styles/App.css";
import "./styles/fonts.css";

import Title from "./components/Title";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function useBackground(src) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return loaded;
}

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
    const dayloaded = useBackground("/src/assets/backgrounds/mehikesunset.jpg");
    const nightloaded = useBackground("/src/assets/backgrounds/nightsky.jpg");


    return (
        <>
            <div className="App"
                theme={theme}
                style={{
                    backgroundImage: theme == "day" ?
                        dayloaded ? "url('/src/assets/backgrounds/mehikesunset.jpg')" : "url('/src/assets/backgrounds/mehikesunset-compressed.jpg')"
                        : nightloaded ? "url('/src/assets/backgrounds/nightsky.jpg')" : "url('/src/assets/backgrounds/nightsky-compressed.jpg')"
                }}
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