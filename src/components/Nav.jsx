// notes
// - clean up
// - check props for links - "useparams"
// - try/catch errors
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import '../styles/Nav.css';

const Nav = ( {links} ) => {
    const nav = useRef(null);
    const path = useLocation().pathname;
    const pathsList = path.split("/").filter(Boolean);
        let handleItemClick = (e)=>{
        e.target.style.backgroundColor = "transparent";
        if (path == "/"){
            nav.current.style.animation = "navHeightDecrease 1s forwards ease-out" ;
        }
    }
    return (<>
        <div className="nav" ref={nav} 
        style={{height: path=="/"?"80vh":"3em",}}>
            
            {links.map((element,index) => 
                (
                <Link key={index} to={element} onClick={handleItemClick} >
                    <div className="navItem" id={element} style={{
                        backgroundColor: pathsList.includes(element)?"rgba(0, 0, 0, 0.400)":"white",
                        color: pathsList.includes(element)?"white":"black",
                        animation: path!="/"?"navItemClick 1s forwards":"navItemClickReverse 1s forwards"
                    }}>{element }</div>
                </Link>
            ))}
        </div>
    
    </>);
};

export default Nav;