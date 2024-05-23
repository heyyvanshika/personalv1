import React from 'react';
import './Projects.css'; 
import arrowproject from '../../Assets/arrowproject.svg'
import snuxplore from '../../Assets/snuxplore.png'

const Projects = () => {
  return (
    <div className="projects">
      <img src={arrowproject} alt="Arrow" className="arrow-project" />
      <div className='projTop'>
        <div className='projTopLeft'>
          <h1>My Projects</h1>
          <h2>Web Design, Frontend, Full Stack</h2>
          <div className='previewButton'>
            <h4 className='previewText'>Check them out below</h4>
          </div>
        </div>
        <div className='projTopRight'>
          <div className='previewBox'></div>
          <div className='previewBox'></div>
          <div className='previewBox'></div>
          <div className='previewBox'></div>
        </div>
      </div>
      <div className='projectBox'>
        <div className='leftProjectBox'>
          <img src={snuxplore} alt="SNUxplore" className="project-img" />
        </div>
        <div className='rightProjectBox'>
          <h3>SNUxplore 3.0</h3>
          <p className='projDesc'>Lorem Ipsum hahahahahh hahah haha hahah haha hLorem Ipsum hahahahahh hah ha hahah haha hLorem Ipsum </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
