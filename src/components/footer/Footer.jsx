import React from "react";
import './footer.css';

const Footer = () => {
    return (<footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
                Shan Perera
            </h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#" className="footer__link">Testimonials</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/lakshan-chamoditha-perera-524479227/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/Lakshan-Chamoditha-Perera" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>
            </div>
            <span className="footer__copy">

                   developed by Shan Perera   &#169; &nbsp;
                    {new Date().getFullYear()}
                </span>
        </div>
    </footer>);

}

export default Footer