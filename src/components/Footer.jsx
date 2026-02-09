import '/src/styles/components/Footer.css'

import { useLocation } from "react-router-dom";
export default function Footer() {
    let location = useLocation();
    return <footer>
        <div className="footer" style={{
            display: location.pathname == "/" ? "none" : "flex"
        }}>
            <div className="left">
                <h1>SOURCES</h1><br />
                <a target="_blank" href="https://icons8.com/icon/106562/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br />
                <a target="_blank" href="https://icons8.com/icon/85044/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br />
                <a target="_blank" href="https://icons8.com/icon/59878/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <br />
                <p> Background photos of Stirling Ridge Walk by <a target="_blank" href="https://www.instagram.com/photo_ventures_with_yosh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Yoshi Muroi</a></p>
            </div>
            <div className="right">
                © 2025 Joshua Patton. All rights reserved.
            </div>
        </div>
    </footer>
}