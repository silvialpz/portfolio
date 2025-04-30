import React from 'react';
import styles from './ProjectsPage.module.css';

import SmallProject from './SmallProject/SmallProject';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bigProjects from '../../data/Projects';
import BigProject from './BigProject/BigProject';

import PersonalizedArrow from './PersonalizedCarousel/PersonalizedArrow';
import PersonalizedIndicator from './PersonalizedCarousel/PersonalizedIndicator';

function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false}
      renderArrowNext={(clickHandler, hasNext, labelNext) => PersonalizedArrow(clickHandler, hasNext, labelNext)}
      renderIndicator={(clickHandler, isSelected, index) => PersonalizedIndicator(clickHandler, isSelected, index)}>
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

      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false}
      centerMode={true} centerSlidePercentage={33}
      renderArrowNext={(clickHandler, hasNext, labelNext) => PersonalizedArrow(clickHandler, hasNext, labelNext)}
      renderIndicator={(clickHandler, isSelected, index) => PersonalizedIndicator(clickHandler, isSelected, index)}
      >
        {bigProjects.map((item) => (
          <SmallProject
            title={item.title}
            image={item.image}
            description={item.description}
            month={item.month}
            year={item.year}
          />
        ))}
      </Carousel>

    </div>
  );
}

export default ProjectsPage;