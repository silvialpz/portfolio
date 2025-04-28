import React from 'react';
import styles from './SmallProject.module.css';

function SmallProject({ title, image, description, month, year }) {
  return (
    <div class={styles.projectContainer}>
      <div className={styles.content}>
        <p>{month}, {year}</p>
        <img src={image} alt='Small Project' style={{}} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SmallProject