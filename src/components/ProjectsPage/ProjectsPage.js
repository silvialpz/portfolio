import React from 'react';
import styles from './ProjectsPage.module.css';
import BigProject from './BigProject/BigProject';

import img1 from '../../assets/sketches/indura.jpeg'
import SmallProject from './SmallProject/SmallProject';

function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <BigProject
        title='Big Project'
        image={img1}
        description='small description of what the project is here'
        language='programming language'
        frameworks='frameworks'
        area='area of working'
        responsibilities='responsibilities i had in the project kind of like a resume where i say what i learned/did and what role I had'
      />
      <SmallProject
        title='Small Project'
        image={img1}
        description='a description of the project and an idea of what it was made it and for what'
      />
    </div>
  );
}

export default ProjectsPage;