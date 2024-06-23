import React from "react";
import './work.css';

const WorkItemCard = ({item}) => {
    return (<div className="work__card" key={item.id}>

            <img src={item.image} alt="" className='work__img'/>
            <h2 className="work__title">{item.title}</h2>
            <p3 className="work__description">{item.description}</p3>

            <div className="work__button-container">
                <a href="" className="work__button">
                    view
                    <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>

                <a href="">
                    <i className="uil uil-github-alt work__git-icon"></i>
                </a>
            </div>
        </div>);
}

export default WorkItemCard