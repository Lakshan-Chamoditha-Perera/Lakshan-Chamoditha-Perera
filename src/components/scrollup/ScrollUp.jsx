import React, {useEffect} from "react";
import "./scrollup.css";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollUp");
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<a href="#" className="scrollUp">
            <i className="uil uil-arrow-up scrollUp__icon"></i>
        </a>);
};

export default ScrollUp;
