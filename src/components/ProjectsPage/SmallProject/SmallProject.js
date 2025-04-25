import React from 'react';
import styles from './SmallProject.module.css';

function SmallProject({ title, image, description}) {
  return (
    <div class={styles.projectContainer}>
      <div className={styles.title}>
        <h2>
          {title}
        </h2>
      </div>
      <div className={styles.content}>
        <img src={image} alt='Small Project' />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SmallProject