import { Link } from "react-router-dom";
import '/src/styles/pages/About.css'

function age() {
  const birthTimstamp = 1034160632000
  const age = (Date.now() - birthTimstamp) / 31540000000
  return age
}
import photoMe from '/src/assets/pictures/photoMeMountain.jpg';

const About = () => {
  return (
    <div className="about page">
      <h1>about me</h1>
      <br />
      <div className="aboutme">

        <div className="introduction">
          <li>I am <strong>    <span
            className="age"
            style={{ width: `${String(age()).length}ch` }}
          >
            {age()}
          </span></strong> years old</li>
          <li>Based in <strong>Perth</strong>, Western Australia</li>
          <li>bachelor of science; double major:<strong> mathematics & statistics, Computer Science </strong> from the University of Western Australia</li>
          <br />
          <p> I’m interested in mathematical modelling, simulation, and software that explains or explores complex ideas.
            I enjoy building things - web apps, tools, and learning-focused software that sit between theory, code, and solving practical real world problems.
            Outside of technical work, I value maintaining balance across the health of my body, mind, and spirit.
            <br />I try to live with intention and act in experience.</p>
        </div>
        <div className="aboutme-photo">
          <img src={photoMe} alt="" />
          <figcaption>Taken at Mt Gran Paradiso, Italy (2025)</figcaption>
        </div>

      </div>
      <br /> <br />
      <h1>Resume</h1>
      <br />
      <h2>Proficiencies</h2>

      <strong>Full-stack Web Development</strong>
      <p>
        I use React to build dynamic, component-based front ends. For styling, I often use Bootstrap, or create custom @media queries for mobile responsiveness. I have experience with both Node.js and Flask for building backends and APIs.
      </p>
      <ul>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Node.js / Express.js</li>
        <li>Flask</li>
      </ul>

      <strong>Software Development</strong>
      <p>
        I have used C and C++ to build fast, efficient physics simulations, and Python for a range of small and large-scale applications. I also have experience with Electron to turn React projects into desktop applications.
      </p>
      <ul>
        <li>C / C++</li>
        <li>Python</li>
        <li>Electron</li>
      </ul>

      <strong>Data Science</strong>
      <p>
        I have a working knowledge of R and SQL, primarily for analyzing large datasets and supporting larger projects.
      </p>
      <ul>
        <li>SQL</li>
        <li>R</li>
      </ul>

      <strong>Mathematics & Technical Tools</strong>
      <p>
        I use Linux and MATLAB regularly for mathematical modeling, simulations, and technical computing tasks.
      </p>
      <ul>
        <li>Linux</li>
        <li>MATLAB</li>
      </ul>

      <br />
      <h2>Work Experience</h2>

      <strong>UX Machines</strong> – Mar 2024 to Sep 2024
      < p >
        <p>
          I interned for 26 weeks (6 months) at <a href="https://uxmachines.com/" target="_blank" rel="noopener noreferrer">UX Machines</a>,
          a software and aerial drone company. I worked on swarm algorithms, geodesic simulations, and flight plan optimization, though I cannot provide further technical details due to an NDA.
        </p>

      </p >

      <br />
      <h1>contact</h1>
      <br />
      Feel free to reach out with any questions,
      <br />
      email: <strong><a href="mailto:123joshuap@gmail.com">123joshuap@gmail.com</a></strong>
    </div >

  );
};

export default About;