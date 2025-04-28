import React from 'react';
import styles from './ProjectsPage.module.css';

import SmallProject from './SmallProject/SmallProject';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bigProjects from '../../data/Projects';
import BigProject from './BigProject/BigProject';

import arrow from '../../assets/icons/arrow.svg';

function personalizedArrow(clickHandler, hasNext, labelNext) {
  return (
      <button onClick={clickHandler} className={styles.next } type='button' style={{opacity: 1}}>
        <img src={arrow} alt='Arrow' />
      </button>
  );
}

function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}
      renderArrowNext={(clickHandler, hasNext, labelNext) => personalizedArrow(clickHandler, hasNext, labelNext)}>
        {bigProjects.map((item) => (
          <BigProject
            title={item.title}
            image={item.image}
            description={item.description}
            language={item.language}
            frameworks={item.frameworks}
            area={item.area}
            responsibilities={item.responsibilities}
          />
        ))}
      </Carousel>

      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} centerSlidePercentage={33} centerMode={true}>
        {bigProjects.map((item) => (
          <SmallProject
            title={item.title}
            image={item.image}
            description={item.description}
            language={item.language}
            frameworks={item.frameworks}
            area={item.area}
            responsibilities={item.responsibilities}
            month={item.month}
            year={item.year}
          />
        ))}
      </Carousel>

    </div>
  );
}

export default ProjectsPage;