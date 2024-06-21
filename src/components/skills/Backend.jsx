import React from "react";

const Backend = () => {
    return (<div className="skills__content">
        <h3 className="skills__title">Backend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">JAVA</h3>
                        <span className="skills__level">JDK 1.8, 11, 17</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">SpringBoot</h3>
                        <span className="skills__level">Spring Data, Spring Cloud, Spring Security </span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Databases</h3>
                        <span className="skills__level">Mysql, Postgres, MongoDB</span>
                    </div>
                </div>

            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Node</h3>
                        <span className="skills__level">Express, Nest</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Version Control</h3>
                        <span className="skills__level">Git, Git Hub, Git Lab</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Web Services
                        </h3>
                        <span className="skills__level">AWS, GCP</span>
                    </div>
                </div>
            </div>

        </div>
    </div>);
}

export default Backend;