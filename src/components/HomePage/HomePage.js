import React from 'react';
import styles from './HomePage.module.css';
import Bio from './Bio/Bio'
import Recent from './Recent/Recent';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Bio/ >
      <Recent/ >
    </div>
  );
}

export default HomePage;