import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
        <h1 style={{color:"white"}}>test</h1>
      </Link>
    </div>
  );
};

export default ErrorPage;