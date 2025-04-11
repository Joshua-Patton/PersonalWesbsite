// notes
// - clean up
// - check props for links - "useparams"
// - try/catch errors
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import '../styles/Nav.css';

const Nav = ( {links} ) => {
    const nav = useRef(null);
    const location = useLocation();
    let handleItemClick = (e)=>{
        e.target.style.backgroundColor = "transparent";
        if (location.pathname == "/"){
            nav.current.style.animation = "navHeightDecrease 2s forwards";
        }
    }



    return (<>
        <div className="nav" ref={nav} 
        style={{height: location.pathname=="/"?"80vh":"3em",}}>
            
            {links.map((element,index) => 
                (
                <Link key={index} to={element} onClick={handleItemClick} >
                    <div className="navItem" id={element} style={{
                        backgroundColor: location.pathname=="/"+element?"rgba(0, 0, 0, 0.356)":"white",
                        color: location.pathname=="/"+element?"white":"black",
                        animation: location.pathname!="/"?"navItemClick 2s forwards":"navItemClickReverse 2s forwards"
                    }}>{element}</div>
                </Link>
            ))}
        </div>
    
    </>);
};

export default Nav;