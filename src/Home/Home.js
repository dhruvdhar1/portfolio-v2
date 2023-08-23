import Button from '@mui/material/Button';
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github-black.png"
import medium from "../assets/medium.webp"
import "./Home.scss";
import 'animate.css';

const Home = () => {
    const animateButton = (idSelector) => {
        const element = document.querySelector(idSelector);
        element.classList.add('animate__animated', 'animate__headShake');
    }

    const removeAnimation = (idSelector) => {
        const element = document.querySelector(idSelector);
        setTimeout(() => {
            element.classList.remove('animate__animated', 'animate__headShake');
        }, 300)
    }

    const animateSocial = (idSelector) => {
        const element = document.querySelector(idSelector);
        element.classList.add('animate__animated', 'animate__pulse');
    }

    const removeAnimationFromSocialBtn = (idSelector) => {
        const element = document.querySelector(idSelector);
        setTimeout(() => {
            element.classList.remove('animate__animated', 'animate__pulse');
        }, 300)
    }

    setTimeout(()=> {
        const element = document.querySelector(".subheading-home");
        element.style.display = "flex"
    }, 500)

    setTimeout(()=> {
        const element = document.querySelector(".home-btn-container");
        element.style.display = "flex"
    }, 700)

    setTimeout(()=> {
        const element = document.querySelector(".social-links-container");
        element.style.display = "flex"
    }, 1000)


    return (
        <div className="home-root" id="home">
            <div className="intro-home">
                <span className="name-heading">DHRUV DHAR</span>
                <span className="name-heading2">I turn coffee into code and ideas into websites.</span>
                <span className="subheading-home">
                    Dedicated and versatile full-stack developer with a passion for creating seamless, 
                    user-centric web applications. Seeking opportunities to apply my expertise in front-end 
                    and back-end development, along with a knack for problem-solving, to contribute to innovative projects and drive exceptional user experiences.
                </span>
                <div className="home-btn-container">
                    <Button variant="contained" 
                        size='large' className='home-btn'
                        id="project-btn"
                        onMouseEnter={() => animateButton("#project-btn")}
                        onMouseLeave={() => removeAnimation("#project-btn")}>
                            Projects
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" 
                        size='large' className='home-btn'
                        id="resume-btn"
                        onMouseEnter={() => animateButton("#resume-btn")}
                        onMouseLeave={() => removeAnimation("#resume-btn")}>
                            Resume
                    </Button>
                </div>
                <div className="social-links-container">
                    {/* linkedin github medium */}
                    <a className='social-logo-container' href="https://www.linkedin.com/in/dhruvdhar1/"
                        target="_blank" id="linkedin-btn"
                        onMouseEnter={() => animateSocial("#linkedin-btn")}
                        onMouseLeave={() => removeAnimationFromSocialBtn("#linkedin-btn")}
                    >
                        <img src={linkedin} width={30} height={30} />
                    </a>
                    <a className='social-logo-container' href="https://github.com/dhruvdhar1" 
                        target="_blank" id="github-btn"
                        onMouseEnter={() => animateSocial("#github-btn")}
                        onMouseLeave={() => removeAnimationFromSocialBtn("#github-btn")}>
                        <img src={github} width={30} height={30} />
                    </a>
                    <a className='social-logo-container' href="https://medium.com/@dhruvdhar1" 
                        target="_blank" id="medium-btn"
                        onMouseEnter={() => animateSocial("#medium-btn")}
                        onMouseLeave={() => removeAnimationFromSocialBtn("#medium-btn")}>
                        <img src={medium} width={30} height={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home