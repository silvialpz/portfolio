import React from 'react'
import styles from './RecentProjectCard.module.css';

function ProjectCard( {month, year, imgPath, title, description} ) {
  return (
    <div className={styles.projectCard}>
      <h6 className={styles.date}>{month}, {year}</h6>
      <img src={imgPath} alt='Cover'></img>
      <h4 className={styles.title}>{title}</h4>
      <h5 className={styles.description}>{description}</h5>
    </div>
  );
}

export default ProjectCard