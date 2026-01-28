import { Link } from "react-router-dom";
import '/src/styles/pages/About.css'

const About = () => {
  return (
    <div className="about page">
      <h1>about me</h1>
      <br />
        <li>I am <strong>22</strong> years old</li>
        <li>located in <strong>Perth</strong>, Western Australia</li>
        <li>Final semester at University of Western Australia<br />
        (bachelor of science; double major:<strong> mathematics & statistics, Computer Science</strong>) </li>
      <br />

      <h2>Interests</h2>
      <p>
        I have a plethora of interests, some of which include:
      </p><br />
      <strong>Mathematics;</strong> 
      <p>I have a strong personal interest in many different fields of mathematics, some of my recent study goes into billiard dynamics, galois theory and non-euclidean tessecelation</p>
      <br />
      <strong>Computer Science</strong> 
      <p>I have most recently taught myself web development, and backend API development. </p>
      <p>Given the world of mass information we live in, I also enjoy data visualisation as a tool for new perspectives and interpretations</p>
      <p>Modeling complex systems I believe to be highly effective when coming to an understanding of the world around us.</p>
      <br />
      <strong>Physical interest</strong>
      <p>I have hiked all over Western Australia, completing the cape to cape, and stirling ridge walk, aswell as many shorter hikes in the perth greater area.</p>
      <p>With about 9 months of experience in muay thai, I enjoy sparring and any combative sports, although I am still an amatuer.</p>
      <p>I have completed a marathon, and sprint triathalon to date, hoping to complete more long distance events in the future</p>
      <br />
      <strong>Psychology</strong> 
      <p>Although I have no formal education in psychology, after reading Maslow and Rogers, I have developed a keen curiosity with the human mind, which I believe relates closely to ethics and meaning in the human experience.</p>
      <br /><br />

      <h1>Resume</h1>
      <br />
      <h2>Proficiencies</h2>
      <strong>Full-stack Web Development</strong>
      <p>Using React to create dynamic component structured front end. I often use BootStrap for my css, or if I want to maintain my personalisation I will create my own @media for phone usage. I have operated both node.js and flask to create both backends and API's.</p>
        <li>React</li>
        <li>BootStrap</li>
        <li>Node.js/Express.js</li>
        <li>Flask</li>
      <strong>Software Development</strong>
      <p>I have used C, and C++ to create fast and powerful physics simulations. I have used python for a variety of small and large applications. I have experience with Electron to create desktop apps from previous react projects.</p>
        <li>C/++</li>
        <li>Python</li>
        <li>Electron</li>
      <strong>Data Science</strong>
      <p>I have a working knowledge of both R and SQL, used mostly pulling for large data sets, or for other larger projects.</p>
        <li>SQL</li>
        <li>R</li>
      <strong>Mathematic</strong>
      <p>Basic almost daily usage of either linux or Matlab.</p>
        <li>Linux</li>
        <li>Matlab</li>
      <br />
      <h2>Work experience</h2>
        <strong>UX Machines</strong> - 3/24 to 9/24
        <p>
          I interned at UX Machines, a software and aerial drone company <a href="https://uxmachines.com/">learn more here</a>, last year for 26 weeks(6 months).
          <br /> Where I worked on swarm algorithms, geodesic simulations and flight plan optimisation. I sadly cannot go into much detail due to an NDA.
        </p>
      <br />
      <h1>contact</h1>
      <br />
      Feel free to reach out with any questions, curiosities or simply to say hi.
      <br />
      email: <strong><a href="mailto:123joshuap@gmail.com">123joshuap@gmail.com</a></strong>
    </div>
  
  );
};

export default About;