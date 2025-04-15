import { Link, Outlet } from "react-router-dom";
import '../styles/Passions.css';
import Nav from '../components/Nav';


export function Writings(){return (<div id="writings">
  <Nav links={["Art","Ethics",""]}/>
  <div className="passionSection">
    <Outlet />
  </div>
</div>
)}
export function Adventures(){return (<div className="passionSection">
  
</div>)}
export function Personal(){return (<div className="passionSection">
  
  </div>)}
export function LearningMaterials(){return (<div className="passionSection">
  
  </div>)}


export function Passions(){
  return <div className="passions">
    <Nav links={["writings","adventures","personal","learningMaterials"]}/>
    <Outlet />
  </div>
};