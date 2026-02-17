import { Link } from "react-router-dom";
import '../styles/components/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div className="error-content">
        <h1>404</h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="home-link">Go back home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
