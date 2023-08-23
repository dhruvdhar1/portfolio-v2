import javascript from "../assets/javascript.png"
import java from "../assets/java.png"
import react from "../assets/react-icon.png"
import azure from "../assets/azure.png"
import sql from "../assets/sql.png"
import nosql from "../assets/mongo.jpg"
import git from "../assets/git.png"
import html from "../assets/html.svg"
import "./About.scss"

const About = () => {
    return (
        <div className="about-root" id="about">
            <div className="about-header">ABOUT ME</div>
            <span className="about-me-underline"></span>
            <div className="about-detail">
                <div className="discover-text">
                    <div className="discover-heading">Discover the Story behind me!</div>
                    <div className="intro-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="skill-list">
                    <div className="skill-heading">My Skills</div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={javascript} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text"> Javascript/ Typescript</div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={html} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text"> HTML + CSS</div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={java} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text"> Java</div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={react} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text"> React JS</div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={azure} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text">Microsoft Azure</div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={sql} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text">SQL</div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={nosql} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text">NoSQL</div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item-icon">
                            <img src={git} className="skill-item-icon"/>
                        </div>
                        <div className="skill-item-text">Github</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About