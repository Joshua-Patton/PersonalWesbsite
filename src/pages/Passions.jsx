import { Link, Outlet } from "react-router-dom";
import '../styles/homepage.css';
import Nav from '../components/Nav';


export function Writings(){return (<p>Writings</p>)}
export function Adventures(){return (<p>Writings</p>)}
export function Personal(){return (<p>Writings</p>)}
export function LearningMaterials(){return (<p>Writings</p>)}


export function Passions(){
  return <div className="passions">
    <Nav links={["writings","adventures","personal","learningMaterials"]}/>
    <Outlet />
  </div>
};