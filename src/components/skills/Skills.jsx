import React, {useEffect, useState} from "react";
import logo1 from "../../assets/nodejs-horizontal.svg";
import logo2 from "../../assets/java-icon.svg";
import logo3 from "../../assets/gitlab-icon.svg";
import logo4 from "../../assets/github-icon.svg";
import logo5 from "../../assets/git-scm-icon.svg";
import logo6 from "../../assets/react.svg";
import logo7 from "../../assets/spring-boot.svg";
import logo8 from "../../assets/javascript.svg";
import logo9 from "../../assets/w3_html5-icon.svg";
import logo10 from "../../assets/spring_cloud.png";
import logo11 from "../../assets/amazon_aws-icon.svg";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css"; // Import the CSS file for styles and animations

const Skills = () => {
    const [logos, setLogos] = useState([logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogos((prevLogos) => {
                const [firstLogo, ...remainingLogos] = prevLogos;
                return [...remainingLogos, firstLogo];
            });
        }, 10000); // Adjust the interval time as needed

        return () => clearInterval(interval);
    }, []);

    return (<section id="skills" className="skills section">
        <h2 className="section__title">Tech - Stack</h2>
        <span className="section__subtitle">Technical level</span>
        <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        
        </div>


        <div className="logo-slider">
            <div className="marquee">
                <div className="marquee-group">
                    {logos.map((el, index) => (<div className="image-group" key={index}>
                        <img className="image" src={el} alt={`Logo ${index + 1}`}/>
                    </div>))}
                </div>
            </div>
        </div>
    </section>);
};

export default Skills;
