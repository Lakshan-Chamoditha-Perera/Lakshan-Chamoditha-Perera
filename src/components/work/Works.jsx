import React, {useEffect, useState} from "react";

import "./work.css";
import WorkItemCard from "./WorkItemCard";

import Work1 from "../../assets/works/timely_web.png";
import Work2 from "../../assets/works/eco_tracker_web.png";
import Work3 from "../../assets/works/next_travel.jpeg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

const projectsData = [{
    id: 1,
    image: Work1,
    title: "Timely Watch Company",
    category: "web",
    description: "Comprehensive Web POS system for timely watch company."
}, {
    id: 2,
    image: Work2,
    title: "Eco Tracker Web",
    category: "web",
    description: "Eco Tracker Web Application for track your wastage."
}, {
    id: 3,
    image: Work3,
    title: "Next Travel Management System",
    category: "web",
    description: "Comprehensive travel planning application developed using springboot and microservices architecture"
}, {
    id: 4,
    image: Work4,
    title: "App movil",
    category: "app",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error."
}, {
    id: 5,
    image: Work5,
    title: "Web design",
    category: "web",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error."
}];

const projectCategories = [{
    id: "all", name: "All",
}, {
    id: "web", name: "Web",
}, {
    id: "app", name: "App",
}, {
    id: "design", name: "Design",
}]

const Works = () => {
    const [category, setCategory] = useState({name: "all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (category.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => project.category === category.name);
            setProjects(newProjects);
        }
    }, [category]);

    return (<div>
            <div className="work__filters">
                {projectCategories.map((item) => {
                    return <span
                        onClick={() => setCategory({name: item.id})}
                        className={`work__item ${category.name === item.id ? "active-work" : ""}`}
                        key={item.id}
                        data-filter={item.id}>
                        {item.name}
                    </span>
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItemCard item={item} key={item.id}/>
                })}
            </div>
        </div>


    )
}

export default Works