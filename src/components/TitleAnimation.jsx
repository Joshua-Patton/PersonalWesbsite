import { Link, } from "react-router-dom";

import '/src/styles/components/TitleAnimation.css';

import { useState, useEffect } from "react";
let handleClick = ()=>{
    document.querySelector(".nav").style.animation = "navHeightIncrease 1s forwards"
}
const TitleAnimation = () => {
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
    <div className="title-container" style={{height: animation?"100vh":"0%"}}>
        <div id="left"></div>
        <div className="box">
            <p className="title" id="name" 
            style={{animation: animation?"typing 1s  steps(13) forwards,cursor 0.4s  step-end infinite alternate,cursorfinish .1s 2s forwards,titleFinish 3s 7s forwards":"typing 1s  steps(13) forwards,cursor 0.4s  step-end infinite alternate,cursorfinish .1s 2s forwards,titleFinish 3s 0s forwards"}}>
            <Link to="/" onClick={handleClick}>Joshua Patton</Link></p>

            <br />
            <div className="sub-titles" style={{display: animation?"contents":"none"}}>
                <div className="title-sub-container"><p className="title-sub" id="w">- web designer</p></div>
                <div className="title-sub-container"><p className="title-sub" id="s">- software dev</p></div>
                <div className="title-sub-container"><p className="title-sub" id="m">- mathematician</p></div>
                <div className="title-sub-container"><p className="title-sub" id="a">- adventurer</p></div>
            </div>
        </div>
        <div id="right">
            <a href="https://github.com/Joshua-Patton" target="_blank" rel="noopener norefferrer"><img src="/src/assets/icons/icons8-github.svg" alt="" /></a>
            <a href="https://www.linkedin.com/in/joshua-patton-681374303/" target="_blank"rel="noopener norefferrer"><img src="/src/assets/icons/icons8-linkedin.svg" alt="" /></a>
        </div>
    </div>
    </>);
};

export default TitleAnimation;