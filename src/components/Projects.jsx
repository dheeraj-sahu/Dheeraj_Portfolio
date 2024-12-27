import React from 'react';
import './Projects.css';
import project from './data/projects.json';

const Projects = () => {
    return (
        <div className="project-container" id='projects'>
            <h1 className="project-heading">Projects</h1>
            <div className="project-cards">
                {project.map((data) => {
                    return (
                        <div key={data.id} className="project-card"
                            data-aos="flip-right"
                            data-aos-duration="1000"

                        >
                            <div className="img">
                                <img src={`/assets/${data.imgSrc}`} alt={data.title} className="card-img" />
                            </div>

                            <div className="card-body"  >
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.description}</p>
                                <div className="btn-container">
                                    <a href={data.demo} className="btn demo-btn btn-outline-warning ">Demo</a>
                                    <a href={data.source} className="btn source-btn btn-outline-warning">Source Code</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
