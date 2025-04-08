import { Link } from "react-router-dom";
import '../styles/homepage.css';


const Homepage = () => {
  return (
    <div className="Homepage">
      <header>
        <nav>
          <a href="">PROJECTS</a>
          <a href="">WRITING</a>
          <a href="">PASSIONS</a> 
        </nav>
      </header>
      <div className="profile">
        <h1>JOSHUA PATTON</h1>
      </div>
      <div className="main">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin arcu mi. Donec in nunc non libero posuere maximus vitae id risus. Proin id pellentesque ipsum, id maximus risus. Ut ac ante sed nisi ornare facilisis sit amet sagittis purus. Morbi semper, felis id aliquet tincidunt, lectus nisl vehicula nunc, et ultricies eros magna sed odio. Quisque malesuada lorem quis tempus scelerisque. Curabitur non nunc odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus facilisis posuere euismod. Nulla sagittis neque et lacus egestas ullamcorper. Phasellus sed maximus ipsum, eu mollis orci. Pellentesque gravida commodo laoreet. Donec est lorem, laoreet ut dignissim et, bibendum eu mauris.
      </div>
      <footer>
        footer
      </footer>
    </div>
    );
};

export default Homepage;