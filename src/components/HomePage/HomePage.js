import React from 'react';
import styles from './HomePage.module.css';
import Bio from './Bio/Bio'

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Bio/ >
    </div>
  );
}

export default HomePage;