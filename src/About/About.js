import javascript from "../assets/javascript.png"
import java from "../assets/java.png"
import react from "../assets/react-icon.png"
import azure from "../assets/azure.png"
import sql from "../assets/sql.png"
import nosql from "../assets/mongo.jpg"
import git from "../assets/git.png"
import html from "../assets/html.svg"
import grad from "../assets/grad.jpeg"
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
                        <p>
                            I am Dhruv Dhar, a passionate software engineer with a profound 
                            enthusiasm for the ever-evolving world of technology. I hold a 
                            Master's degree in Computer Science from Northeastern University, a journey that 
                            further ignited my fervor for the software engineering domain.
                        </p>
                        <p>
                            What truly excites me about software engineering is its transformative power. 
                            The ability to transform innovative ideas into tangible, user-friendly applications 
                            that have the potential to impact lives is what fuels my dedication to this field. 
                            Whether it's optimizing code for efficiency, architecting scalable systems, or staying
                            on the cutting edge of emerging technologies, I am committed to delivering software 
                            solutions that are not just functional, but elegant and user-centric.
                        </p>
                        <p>
                            In my career, I've had the privilege of collaborating with diverse agile teams, 
                            and I've come to appreciate the collaborative nature of our industry. I look forward 
                            to continuing this journey, contributing my skills and enthusiasm to the ever-evolving 
                            world of software engineering while continually seeking new challenges to drive my personal 
                            and professional growth.
                        </p>
                    </div>

                    
                    
                </div>


                <div className="dhruv-pic">
                    <img src={grad} height={500} width={400}/>
                </div>
            </div>
            <div className="skill-section">
                <div className="skill-heading">My Skills</div>
                <div className="skill-items">
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