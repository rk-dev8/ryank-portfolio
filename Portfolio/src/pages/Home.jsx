export default function Home() {
  return (
    <>

      <img src="./assets/me.WEBP" alt="Ryan Kurtz" />
      <div className="page-container">
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page.</p>
        <div className="page-container">
          <h1>Contact Me</h1>
          <p>Ryan Kurtz</p>
          <p>Longmont, Colorado</p>
          <p>Ryan.Kurtz08@gmail.com</p>
          <p>Github: rk-dev8</p>
          <p>Linkedin: www.linkedin.com/in/ryan-kurtz-5b5b14344</p>

        </div>
      </div>


      {/* About me */}
      <div className="page-container">
        <h1>About Me</h1>
        <p><strong>The Foundation:</strong><br /> A background rooted in the technical precision of high-end bike mechanics and the communication-heavy world of 7th-grade science. These roles taught me how to deconstruct complex systems and translate technical "how" into human "why." <br /><br />
          <strong>The Stack:</strong><br /> Currently building responsive, performance-driven applications using React, JavaScript, and Tailwind CSS. Back-end focused in MySQL and Node.js, with a specialization in Generative AI integration through Purdue University. <br /><br />
          <strong>The Projects:</strong><br /> From architecting bike geometry visualization tools to developing full-scale HR portals, I focus on writing clean, maintainable code that solves niche problems. <br /><br />
          <strong>The Goal:</strong><br /> Applying a teacher’s clarity and a mechanic’s eye for detail to an engineering team building the next generation of integrated technology.</p>
      </div>

      {/* Dev Projects */}

      <div className="page-container">
        <h1>Dev</h1>
        <p>screenshots of small projects, explanation of geomatch, list of topics learned</p>
      </div>


      {/* Education */}
      <section class="education-section">
        <div class="timeline">
          <div class="container left">
            <div class="content">
              <h1>Education</h1>
              <h3>March 2026</h3>
              <h2>Purdue University</h2>
              <p class="degree">Full Stack Development with Generative AI</p>
              <p class="details">Intensive program focused on MERN stack (MongoDB, Express, React, Node) and AI-driven development workflows.</p>
            </div>
          </div>

          <div class="container right">
            <div class="content">
              <h3>2017</h3>
              <h2>Colorado State University</h2>
              <p class="degree">B.S. Natural Sciences, Biology Education</p>
              <p class="details">Background in scientific education and technical troubleshooting.</p>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />




    </>
  );
}
