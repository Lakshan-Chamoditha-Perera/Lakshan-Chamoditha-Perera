import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";



const Skills = () => {
    return (<section id="skills" className="skills section">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle"> Technical level</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>

    );
}

export default Skills;