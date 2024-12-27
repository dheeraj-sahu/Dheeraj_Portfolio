import React from 'react';
import './Skill.css';
import skills from './data/skills.json';

const Skill = () => {
    return (
        <div className="container skills" id="skills">
            <h1>Skills</h1>
            <div className="items">
                {skills.map((data) => (
                    <div
                        className="item"
                        key={data.id} // Correct placement of the key
                        data-aos="flip-left"
                        data-aos-duration="1000"
                    >
                        <img src={`/assets/${data.imgSrc}`} alt={data.title} />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
