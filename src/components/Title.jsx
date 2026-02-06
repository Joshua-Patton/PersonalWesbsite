import { Link, } from "react-router-dom";
import { useState, useEffect } from "react";

import '/src/styles/components/Title.css';

import githublogo from '/src/assets/icons/icons8-github.svg';
import linkedinlogo from '/src/assets/icons/icons8-linkedin.svg';


let handleClick = () => {
    document.querySelector(".nav").style.animation = "navHeightIncrease 1s forwards"
}
const Title = () => {
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        // Check if "firstVisit" exists in localStorage
        const isFirstVisit = sessionStorage.getItem("firstVisit");

        if (!isFirstVisit) {
            // First instance: enable animation and save the flag
            setAnimation(true);
            sessionStorage.setItem("firstVisit", "true");
        }
    }, []);

    return (
        <>
            <div className="title-container">
                <div id="left">
                </div>
                <div className="box">
                    <p className="title" id="name"
                        style={{ animation: animation ? "typing 1s  steps(13) forwards,cursor 0.4s  step-end infinite alternate,cursorfinish .1s 2s forwards,titleFinish 3s 7s forwards" : "typing 1s  steps(13) forwards,cursor 0.4s  step-end infinite alternate,cursorfinish .1s 2s forwards,titleFinish 3s 0s forwards" }}>
                        <Link to="/" onClick={handleClick}>Joshua Patton</Link></p>
                </div>
                <div id="right">
                    <a href="https://github.com/Joshua-Patton" target="_blank" rel="noopener norefferrer"><img src={githublogo} alt="" /></a>
                    <a href="https://www.linkedin.com/in/joshua-patton-681374303/" target="_blank" rel="noopener norefferrer"><img src={linkedinlogo} alt="" /></a>
                </div>
            </div>
        </>);
};

export default Title;