import { Link } from "react-router-dom";
import Grid from '../components/Grid';

const Test = () => {
  return (
    <div className="Test" 
    style={{
        height: "70vh",
        width: "70vw"
    }}>
        <Grid rows={4} columns={4} bgSrc={"backgrounds/clouds.jpg"}/>
    </div>
    );
};

export default Test;