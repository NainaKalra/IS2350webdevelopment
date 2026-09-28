import React from "react";

export function Header() {
  return (
    <header className="resume-header">
      <h1>Nainaa Kalra</h1>
      <p className="subtitle">Computer Science Student & Developer</p>
      <div className="links">
        <span>Fort Wayne, IN</span>
        <span>|</span>
        <span>+1 (260) 348-8496</span>
        <span>|</span>
        <a href="mailto:kalranainaa2@gmail.com">kalranainaa2@gmail.com</a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/kalranainaa/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span>|</span>
        <a href="https://nainakalra.github.io/Portfolio_Nainaa/" target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </div>
    </header>
  );
}

export function Summary() {
  return (
    <section className="resume-section">
      <h2>Professional Summary</h2>
      <p>
        Computer Science student with a minor in Cybersecurity and hands-on experience building AI-powered applications, web projects, and data-driven solutions. Experienced with Python, JavaScript, FastAPI, REST APIs, Firebase, and databases, with a strong focus on testing, debugging, documentation, and practical problem-solving. Strong communicator with experience tutoring technical subjects, leading STEM programs, and working collaboratively on technology projects.
      </p>
    </section>
  );
}

export function Education() {
  return (
    <section className="resume-section">
      <h2>Education</h2>
      <div className="exp-item">
        <div className="exp-header">
          <h3>Indiana Institute of Technology</h3>
          <span>Fort Wayne, IN | May 2028</span>
        </div>
        <p className="company">Bachelor of Science in Computer Science, Minor in Cybersecurity | GPA: 3.98</p>
        <p className="sub-detail">Dean's List | Honors College</p>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="resume-section">
      <h2>Projects</h2>

      <div className="exp-item">
        <div className="exp-header">
          <h3>WaterYouPrompting</h3>
          <span>Sep 2026 – Present</span>
        </div>
        <p className="company">JavaScript, Vite, Chrome extension, TF-IDF Vectorization</p>
        <ul>
          <li>Developing a Chrome extension that encourages intentional AI use by locally analyzing user prompts before they are sent to AI tools.</li>
          <li>Implemented TF-IDF vectorization to convert user prompts into numerical representations for local prompt classification.</li>
          <li>Implemented browser-based storage and a popup interface to track avoided AI usage and provide real-time feedback.</li>
          <li>Focused on privacy-conscious design by keeping prompt analysis and user statistics local to the browser.</li>
        </ul>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <h3>Carebridge</h3>
          <span>Jul 2026 – Present</span>
        </div>
        <p className="company">FastAPI, Python, Firebase, JS</p>
        <ul>
          <li>Built an AI-powered platform integrating third-party APIs to automate communication workflows and support product functionality.</li>
          <li>Connected application workflows with Firebase backend architecture and RESTful data flows to support reliable data exchange.</li>
          <li>Handled error cases, data mapping, testing, documentation, and implementation updates across the lifecycle.</li>
        </ul>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <h3>WISE Website</h3>
          <span>May 2026 – Present</span>
        </div>
        <p className="company">HTML, CSS, JS, SEO</p>
        <ul>
          <li>Designed and developed a responsive website with intuitive navigation and mobile-friendly layouts to improve member engagement.</li>
          <li>Implemented accessibility best practices, SEO optimization, and structured navigation across desktop and mobile devices.</li>
          <li>Conducted website testing, debugging, and cross-browser validation to improve performance and usability.</li>
        </ul>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="resume-section">
      <h2>Leadership and Experience</h2>

      <div className="exp-item">
        <div className="exp-header">
          <h3>Summer Camp Counsellor</h3>
          <span>May 2026 – Present</span>
        </div>
        <p className="company">Indiana Tech STEAM Academy</p>
        <ul>
          <li>Worked across 5 camps with 100+ middle and high school students, teaching Python programming, AI tools, and robotics.</li>
          <li>Authored engaging educational modules that simplified computational thinking for young learners.</li>
          <li>Designed and scheduled promotional social media content for the STEAM Academy.</li>
        </ul>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <h3>Peer Tutor</h3>
          <span>Jan 2025 – Present</span>
        </div>
        <p className="company">Indiana Institute of Technology</p>
        <ul>
          <li>Provided one-on-one tutoring in Python, Algebra, Trigonometry, Calculus I & II, Intro to CS, CS1, CS2, Server Systems, and Databases.</li>
          <li>Consistently improved student performance by 15% across sessions by identifying individual gaps and adapting teaching approach.</li>
        </ul>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <h3>Girls Tech Takeover Program Lead</h3>
          <span>Fall 2025 – Present</span>
        </div>
        <p className="company">Afterschool Program</p>
        <ul>
          <li>Spearheaded weekly STEM coding sessions for middle school girls, teaching Python fundamentals through game development.</li>
          <li>Designed lesson plans around problem decomposition and debugging, resulting in students independently writing Python code.</li>
        </ul>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <h3>President</h3>
          <span>Oct 2025 – Present</span>
        </div>
        <p className="company">Women in Science and Engineering (WISE)</p>
        <ul>
          <li>Lead organizational initiatives to strengthen engagement among women pursuing STEM fields.</li>
          <li>Coordinated communication between executive members, faculty advisors, and students while balancing technical development goals.</li>
        </ul>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="resume-section">
      <h2>Core Skills</h2>

      <div className="skills-group">
        <p>Languages & Web:</p>
        <div className="tags">
          <span>Python</span>
          <span>JavaScript</span>
          <span>C++</span>
          <span>C</span>
          <span>SQL</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Responsive Web Design</span>
          <span>Accessibility</span>
          <span>SEO</span>
        </div>
      </div>

      <div className="skills-group">
        <p>AI, Data & Databases:</p>
        <div className="tags">
          <span>AI Applications</span>
          <span>Machine Learning</span>
          <span>Vectorization</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Scikit-learn</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>Firebase</span>
        </div>
      </div>

      <div className="skills-group">
        <p>Tools & Concepts:</p>
        <div className="tags">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Figma</span>
          <span>FastAPI</span>
          <span>OpenAI API</span>
          <span>Cybersecurity Fundamentals</span>
        </div>
      </div>
    </section>
  );
}