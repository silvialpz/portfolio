import React from "react";
import styles from './CVPage.module.css'

const CVPage = () => {
  return (
    <div className={styles.cvPage}>
      <header className="cv-header">
        <h1>Silvia López</h1>
        <p className="cv-title">Computer Engineer</p>
        <ul className="cv-contact">
          <li>📧 <a href="mailto:sclopez7@gmail.com">sclopez7@gmail.com</a></li>
        </ul>
      </header>

      <section className="cv-section">
        <h2>🎓 Education</h2>
        <div className="cv-item">
          <h3>University of Toronto – Computer Engineering, Minor in Artificial Intelligence</h3>
          <p className="cv-date">📅 Sep 2019 - June 2025</p>
          <p>🏆 Awarded: Lester B. Pearson International Scholarship</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>💼 Work Experience</h2>
        <div className="cv-item">
          <h3>Teaching Assistant & Mentor – CS Academy, University of Toronto</h3>
          <p className="cv-date">📅 March 2025</p>
          <ul>
            <li>Taught high school students fundamental Python programming concepts and introduced linear algebra in an
              accessible way for animation research.
            </li>
            <li>Led icebreaker activities each morning to foster a welcoming and collaborative learning environment.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>Software Engineering Intern – Uhnder Inc. CA</h3>
          <p className="cv-date">📅 June 2022 - July 2023</p>
          <ul>
            <li>Developed a Python-based radar antenna design tool that automated product documentation and figure
              generation.
            </li>
            <li>Improved efficiency of the design workflow.</li>
            <li>Created all technical documentation to ensure clarity for future users.</li>
            <li>Architected a 3D visualization tool using Python, ROS, and Rviz to represent simulation data.</li>
            <li>Adapted quickly to new technologies, demonstrating rapid learning in ROS.</li>
            <li>Collaborated across multiple teams to integrate project components.</li>
            <li>Successfully delivered the tool on schedule following a planned timeline.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>💻 Programming Projects</h2>
        <div className="cv-item">
          <h3>CGRA Data Flow Graph Visualizer – Research Project</h3>
          <p className="cv-date">📅 April 2024 - August 2024</p>
          <ul>
            <li>Developed a GUI using SFML in C++ to visualize data flow and congestion on a Coarse Grain Reconfigurable
              Array (CGRA).
            </li>
            <li>Refactored code into an MVC system, improving maintainability.</li>
            <li>Conducted feedback sessions with a master's student to accurately represent complex data.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>CodeBuddy VS Code Extension – Capstone Project</h3>
          <p className="cv-date">📅 June 2023 - June 2024</p>
          <ul>
            <li>Built a programming tutor for novice C programmers using the OpenAI API as a VS Code Extension.</li>
            <li>Designed the UI using HTML, CSS, and JavaScript.</li>
            <li>Provided status updates to project supervisors to ensure alignment.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>Interactive Sketch Clustering – Research Project</h3>
          <p className="cv-date">📅 August 2023 - April 2024</p>
          <ul>
            <li>Collaborated with a postdoctoral researcher to improve an existing stroke clustering algorithm.</li>
            <li>Implemented incremental input processing in C++, allowing real-time sketch updates.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>🛠️ Technical Skills</h2>
        <ul className="cv-skills">
          <li>Python</li>
          <li>C++, C</li>
          <li>Javascript, HTML, CSS</li>
          <li>React</li>
          <li>Git & Mercurial</li>
          <li>PyQt</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>🚀 Competencies</h2>
        <ul className="cv-competencies">
          <li>✅ Communication</li>
          <li>✅ Organization</li>
          <li>✅ Collaboration</li>
          <li>✅ Rapid Learning</li>
          <li>✅ Problem Solving</li>
          <li>✅ Time Management</li>
          <li>✅ Adaptability</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>📚 Relevant Courses</h2>
        <ul className="cv-courses">
          <li>Computer Graphics</li>
          <li>Computer Architecture</li>
          <li>Compilers & Interpreters</li>
          <li>Artificial Intelligence</li>
          <li>Applied Fundamentals of Deep Learning</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>🤝 Volunteering</h2>
        <div className="cv-item">
          <h3>Head of People & Logistics – Her Code Camp 2025</h3>
          <p className="cv-date">📅 April 2025 - Present</p>
          <ul>
            <li>In charge of planning, encompassing vendor management for catering services and equipment acquisition (laptops for students), contributing to a well-organized event environment.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>Team Leader – SIGGRAPH Conference 2024</h3>
          <p className="cv-date">📅 May 2024 - July 2024</p>
          <ul>
            <li>Coordinated 200+ student volunteers and provided on-site support for attendees and presenters.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>Student Volunteer – SIGGRAPH Conference 2023</h3>
          <p className="cv-date">📅 August 2023</p>
          <ul>
            <li>Assisted attendees and helped contributors demo VR technology.</li>
          </ul>
        </div>
        <div className="cv-item">
          <h3>Graphic Design Lead – Ontario Engineering Competition 2022</h3>
          <p className="cv-date">📅 Jan 2021 - Jan 2022</p>
          <ul>
            <li>Designed logo, layout, printing, and marketing materials.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CVPage;