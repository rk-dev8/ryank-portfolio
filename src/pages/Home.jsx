import mePhoto from '../assets/me.WEBP';
import velo22Logo from '../assets/Velo22_logo.PNG';
import TypewriterText from '../components/TypewriterText';

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';

const stack = [
  { label: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { label: 'HTML',       icon: <SiHtml5      color="#E34F26" /> },
  { label: 'CSS',        icon: <SiCss        color="#1572B6" /> },
  { label: 'React',      icon: <SiReact      color="#61DAFB" /> },
  { label: 'Node.js',    icon: <SiNodedotjs  color="#339933" /> },
  { label: 'Express.js', icon: <SiExpress    color="#888888" /> },
  { label: 'Tailwind',   icon: <SiTailwindcss color="#06B6D4" /> },
  { label: 'MongoDB',    icon: <SiMongodb    color="#47A248" /> },
  { label: 'MySQL',      icon: <SiMysql      color="#4479A1" /> },
];

export default function Home() {
  return (
    <>

      <div className="profile-img-wrapper">
        <img src={mePhoto} alt="Ryan Kurtz" className="profile-img" />
      </div>
      <div id="welcome" className="page-container welcome-section">
        <div className="welcome-text">
          <h2><TypewriterText /></h2>
          <p>Full-stack developer based in Longmont, Colorado.</p>
        </div>
        <div className="contact-card">
          <h3>Contact</h3>
          <p>Ryan Kurtz</p>
          <p>Longmont, Colorado</p>
          <p><a href="mailto:Ryan.Kurtz08@gmail.com">Ryan.Kurtz08@gmail.com</a></p>
          <p><a href="https://github.com/rk-dev8" target="_blank" rel="noreferrer">GitHub: rk-dev8</a></p>
          <p><a href="https://www.linkedin.com/in/ryan-kurtz-5b5b14344" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
      </div>


      {/* About me */}
      <div id="about" className="page-container">
        <h2>About Me</h2>
        <p> 
          Full-stack developer with a mechanic's precision and a teacher's clarity. I build performant web applications using React, Tailwind, and Node.js, specializing in Generative AI solutions. I focus on writing clean, scalable code for niche problems—from cycling geometry visualizers to enterprise HR tools. I'm driven by the "how" of complex systems and the "why" of user experience.
          </p>

        <h3 className="stack-heading">My Stack</h3>
        <div className="stack-grid">
          {stack.map(({ label, icon }) => (
            <div key={label} className="stack-item">
              <span className="stack-icon">{icon}</span>
              <span className="stack-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dev Projects */}

      <div id="dev" className="page-container">
        <h2>Dev</h2>

        <div className="project-card">
          <div className="project-title-row">
            <h5>Velo22</h5>
            <img src={velo22Logo} alt="Velo22 logo" className="project-logo-circle" />
          </div>
          <p>Velo22 is a cycling community website in Teton County, WY. I started Velo22 in an attempt to bring the cycling community together in Jackson, WY and the surrounding areas. While I made this website with Squarespace, this sparked my interest in the software development world, and from there, I began exploring full-stack development.</p>
        </div>

        <div className="project-card">
          <h5>GeoMatch</h5>
          <p>Geomatch is a bicycle geometry comparison tool that will make it easier for bike shops to compare two bikes and make them fit the same. This will streamline the process of ordering new custom bikes. Geomatch is still in development — check back soon for updates.</p>
        </div>

        <div className="project-card">
          <h5>Small Projects</h5>
          <p>There are several small projects listed on my GitHub that were practice exercises to improve my skills and explore new technologies.</p>
        </div>
      </div>


      {/* Education */}
      <section id="education" className="page-container education-section">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">March 2026</span>
            <div className="timeline-content">
              <h3>Purdue University</h3>
              <p className="degree">Full Stack Development with Generative AI</p>
              <p className="details">Intensive program focused on MERN stack (MongoDB, Express, React, Node) and AI-driven development workflows.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">2017</span>
            <div className="timeline-content">
              <h3>Colorado State University</h3>
              <p className="degree">B.S. Natural Sciences, Biology Education</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
