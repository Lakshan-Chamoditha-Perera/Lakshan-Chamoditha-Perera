import React from "react";
import "./about.css";

const Info = () => {
    return (<div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'
               style={{color: "#47e3ff"}}
            ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 years</span>
        </div>
        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'
                style={{color: "#15ca20"}}
            ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ projects</span>
        </div>
        <div className="about__box">
            <i className='bx bx-support about__icon'
                style={{color: "#ffbb2c"}}
            ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>);
}

export default Info;