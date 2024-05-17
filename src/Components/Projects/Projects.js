import React from 'react';
import './Projects.css'; 
import arrowproject from '../../Assets/arrowproject.svg'
import snuxplore from '../../Assets/snuxplore.png'

const Projects = () => {
  return (
    <div className="projects">
      <img src={arrowproject} alt="Arrow" className="arrow-project" />
      <h1>My Projects</h1>
      <h2>Web Design, Frontend, Full Stack</h2>
      <div className='projectBox'>
        <div className='topProject'>
          <img src={snuxplore} alt="SNUxplore" className="snuxplore-img" />
          <div className='rightProject'>
            <h3>SNUxplore 3.0</h3>
            <p className='projDesc'>Lorem Ipsum hahahahahh hahah haha hahah haha haha haha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
