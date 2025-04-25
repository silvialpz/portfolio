import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/sketches/indura.jpeg"
import BigProject from '../BigProject/BigProject';


class ProjectGallery extends Component {
  render() {
    const bigProjects = [
      {
        title: 'Big Project 1',
        image: img1,
        description: 'small description of what the project is here',
        language: 'programming language',
        frameworks: 'frameworks',
        area: 'area of working',
        responsibilities: 'responsibilities i had in the project kind of like a resume where i say what i learned/did and what role I had'
      },
      {
        title: 'Big Project 2',
        image: img1,
        description: 'small description of what the project is here',
        language: 'programming language',
        frameworks: 'frameworks',
        area: 'area',
        responsibilities: 'responsibilities'
      },
      {
        title: 'Big Project 3',
        image: img1,
        description: 'small description of what the project is here',
        language: 'programming language',
        frameworks: 'frameworks',
        area: 'area',
        responsibilities: 'responsibilities'
      }
    ]

    return (
      <Carousel showThumbs={false} centerMode={true} autoPlay={true} infiniteLoop={true}>
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
    )
  }
}

export default ProjectGallery