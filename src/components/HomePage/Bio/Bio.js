import React from 'react';
import styles from './Bio.module.css';
import headshot from '../../../assets/images/portrait.jpg'; // Replace with your image path
import githubIcon from '../../../assets/icons/github.png'; // Replace with your icon path
import linkedinIcon from '../../../assets/icons/linkedin.png'; // Replace with your icon path
import resumeIcon from '../../../assets/icons/downloading.png'; // Replace with your icon path
import resumePdf from '../../../assets/documents/Resume.pdf'; // Replace with your resume path

function Bio() {
  return (
    <section className={styles.bioSection}>
      <div className={styles.column}>
        <p>Hello! I'm Silvia, an enthusiastic computer engineer 
          with a lifelong appreciation for art and animation. 
          Driven by a desire to merge technology and creativity, 
          I aspire to develop creative tools that empower and inspire artists.
        </p>
      </div>

      <div className={styles.column}>
        <img src={headshot} alt="Headshot" className={styles.headshot} />
      </div>

      <div className={styles.column}>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://github.com/silvialpz" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/silvia-lopez-1a9468204/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href={resumePdf} download>
              <img src={resumeIcon} alt="Download Resume" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Bio;