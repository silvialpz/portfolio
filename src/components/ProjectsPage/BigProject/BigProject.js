import React from 'react';
import styles from './BigProject.module.css';

function BigProject({ title, image, description, language, frameworks, area, responsibilities }) {
  return (
    <div class={styles.projectContainer}>
      <div className={styles.content}>
        <div>
          <div>
            <h2>
              {title}
            </h2>
            <p>{description}</p>
            <div className={styles.skills}>
              <p>{language}</p>
              <p>{frameworks}</p>
              <p>{area}</p>
            </div>
            <p>{responsibilities}</p>
          </div>
        </div>
        <div className={styles.projectImage}>
          <img src={image} alt='Big Project' style={{ width: 'auto' }} />
        </div>
      </div>
      <div className={styles.space}></div>
    </div>
  );
}

export default BigProject