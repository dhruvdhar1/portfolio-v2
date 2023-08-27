import "./Contact.scss"

const Contact = () => {
    return(
        <div>
            <div className="contact-root" id="contact">
            <div className="contact-header" id="contact">Get In Touch!</div>
            <div className="contact-sub-header">
                <p>
            I'm enthusiastic about collaboration and always open 
            to exploring new opportunities to work together. Feel free to reach out 
             if you're interested in collaborating, brainstorming, or 
             simply connecting. Let's create something exceptional together!
             </p>
             <p>
                <a className="mail-link" href="mailto:dhruvdhar1@gmail.com">email: dhruvdhar1@gmail.com</a>
             </p>
            </div>
        </div>
        
        <div className="contact-footer">
            Based on design by Brittany Chiang, developed by Dhruv Dhar.
        </div>
        </div>
    )
}

export default Contact;