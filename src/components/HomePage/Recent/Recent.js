import React from "react";
import styles from "./Recent.module.css"
import ProjectCard from "../ProjectCard/ProjectCard";

import img1 from "../../../assets/sketches/merendon.jpeg"
import img2 from "../../../assets/sketches/coco.jpeg"
import img3 from "../../../assets/sketches/window.jpeg"

function Recent() {
  const recentItems = [
    {
      month: 'XXX',
      year: '2025',
      imgPath: img1,
      title: 'Something interesting 1, cute title here',
      description: 'An objective description'
    },
    {
      month: 'XXX',
      year: '2023',
      imgPath: img2,
      title: 'Something interesting 2, cute title here',
      description: 'An objective description'
    },
    {
      month: 'XXX',
      year: '2024',
      imgPath: img3,
      title: 'Something interesting 3, cute title here',
      description: 'An objective description'
    }
  ]

  return (
    <section className={styles.recentSection}>
      <h2 className={styles.title}>Recent Activity</h2>

      <div className={styles.grid}>
        {recentItems.map((item) => (
          <ProjectCard
            month={item.month}
            year={item.year}
            title={item.title}
            description={item.description}
            imgPath={item.imgPath}
          />
        ))}
      </div>
    </section>
  );
}

export default Recent