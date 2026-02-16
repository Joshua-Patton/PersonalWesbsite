import { Link, } from "react-router-dom";
import { useState, useEffect } from "react";
import quotes from "../assets/quotes.json";
import '/src/styles/components/Title.css';
import githublogo from '/src/assets/icons/icons8-github.svg';
import linkedinlogo from '/src/assets/icons/icons8-linkedin.svg';


let handleClick = () => {
    document.querySelector(".nav").style.animation = "navHeightIncrease 1s forwards"
}
const Title = () => {
    const [quote] = useState(() =>
        quotes[Math.floor(Math.random() * quotes.length)]
    );
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        // Check if "firstVisit" exists in localStorage
        const isFirstVisit = sessionStorage.getItem("firstVisit");

        if (!isFirstVisit) {
            // First instance: enable animation and save the flag
            setAnimation(true);
            sessionStorage.setItem("firstVisit", "true");
        }

        //get quote

    }, []);

    return (
        <>
            <div className="title-container">
                <div id="left">

                    <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/7CQE4KRxkFweZMqNOYuW2J?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>



                </div>
                <div className="box">
                    <p className="title" id="name"
                        style={{ animation: animation ? "typing 1s  steps(13) forwards,cursor 0.4s  step-end infinite alternate,cursorfinish .1s 2s forwards,titleFinish 3s 7s forwards" : "typing 1s  steps(13) forwards,cursor 0.4s  step-end infinite alternate,cursorfinish .1s 2s forwards,titleFinish 3s 0s forwards" }}>
                        <Link to="/" onClick={handleClick}>Joshua Patton</Link></p>
                    <div className="quote">
                        <div className="quote-text">{quote.text}</div>
                        <div className="quote-author">{quote.author}</div>
                    </div>
                </div>
                <div id="right">
                    <a href="https://github.com/Joshua-Patton" target="_blank" rel="noopener norefferrer"><img src={githublogo} alt="" /></a>
                    <a href="https://www.linkedin.com/in/joshua-patton-681374303/" target="_blank" rel="noopener norefferrer"><img src={linkedinlogo} alt="" /></a>
                </div>
            </div>
        </>);
};

export default Title;