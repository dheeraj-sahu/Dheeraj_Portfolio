import React from 'react';
import './Experience.css';
import experience from './data/experience.json';

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            {experience.map((data) => (
                <div
                    key={data.id} // Unique key here
                    className="ex-items text-center my-5"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <div className="left">
                        <img src={`/assets/${data.imgSrc}`} alt={data.role} />
                    </div>
                    <div className="right">
                        <h2>{data.role}</h2>
                        <h4>
                            <span style={{ color: "yellowgreen" }}>
                                {data.startDate}{" "}{data.endDate}{" "}
                            </span>
                            <span style={{ color: "yellow" }}>
                                {data.location}
                            </span>
                        </h4>
                        {data.experiences.map((exp, index) => (
                            <h5 key={index} >
                                {exp}
                            </h5>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
