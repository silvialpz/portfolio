import React from 'react';
import styles from './ProjectsPage.module.css';

import img1 from '../../assets/sketches/indura.jpeg'
import SmallProject from './SmallProject/SmallProject';
import ProjectGallery from './ProjectGallery/ProjectGallery';

function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <ProjectGallery />
      
      <SmallProject
        title='Small Project'
        image={img1}
        description='a description of the project and an idea of what it was made it and for what'
      />
      
    </div>
  );
}

export default ProjectsPage;