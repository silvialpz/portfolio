import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ''}`}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects" className={`${styles.navLink} ${location.pathname === "/projects" ? styles.active : ''}`}>Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/sketchbook" className={`${styles.navLink} ${location.pathname === "/sketchbook" ? styles.active : ''}`}>Sketchbook</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/cv" className={`${styles.navLink} ${location.pathname === "/cv" ? styles.active : ''}`}>CV</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;