import "./Projects.scss"
import Button from '@mui/material/Button';
import img from "../assets/dp.jpeg"
import telemetry from "../assets/telemetry.gif"
import dbscan from "../assets/dbscan.gif"

const Projects = () => {
    return (
        <div className="project-root" id="projects">
            <div className="project-heading">PROJECTS</div>

            {/* Project 1 */}
            <div className="project-item-img">
                <img src={dbscan} width={500}/>
            </div>
            <div className="project-item-desc">
                <div className="project-item-desc-header">Data Clust</div>
                <div className="project-item-desc-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </div>
                <br/>
                <Button variant="contained" 
                    size='large' className='home-btn'
                    id="project-btn"
                    onClick={() => {
                        window.open("https://github.com/dhruvdhar1/data-clust", "_blank", "noreferrer");
                    }}>
                        Github link
                </Button>
                
            </div>

            {/* Project 2 */}
            <div className="project-item-img">
                <img src={telemetry} width={500}/>
            </div>
            <div className="project-item-desc">
                <div className="project-item-desc-header">API Sight (Roadmapped)</div>
                <div className="project-item-desc-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </div>
                <br/>
                <Button variant="contained" 
                    size='large' className='home-btn'
                    id="project-btn"
                    disabled
                    onClick={() => {
                        window.open("https://github.com/dhruvdhar1/data-clust", "_blank", "noreferrer");
                    }}>
                        Github link
                </Button>
            </div>

            {/* Project 3 */}
            <div className="project-item-img">
                <img src={img} />
            </div>
            <div className="project-item-desc">
                <div className="project-item-desc-header">Jaxos</div>
                <div className="project-item-desc-body">
                This project is a Java implementation of the Paxos algorithm by Dr. Leslie lamport, 
                a robust and distributed consensus protocol. Paxos plays a 
                crucial role in ensuring fault-tolerant and consistent 
                decision-making in distributed systems, making it an essential 
                tool for building reliable and resilient applications.
                </div>
                <br/>
                <Button variant="contained" 
                    size='large' className='home-btn'
                    id="project-btn"
                    onClick={() => {
                        window.open("https://github.com/dhruvdhar1/Jaxos", "_blank", "noreferrer");
                    }}>
                        Github link
                </Button>
            </div>

            {/* Project 4 */}
            <div className="project-item-img">
                <img src={img} />
            </div>
            <div className="project-item-desc">
                <div className="project-item-desc-header">pClust</div>
                <div className="project-item-desc-body">
                Proteins are the building blocks of all living organisms and 
                its analysis can help us to understand the bimolecular mechanics of 
                living organisms. Protein clustering attempts to group similar protein 
                sequences and has diverse applications in bioinformatics. However this 
                operation faces various computational challenges because of dependency 
                on complex data structures, high memory usage and irregular memory access 
                patterns. In genome studies, the time consideration for alignment is also an 
                important parameter and should be minimised. Conventional solutions have rather 
                been unsuccessful in achieving decent runtime performance because these algorithms 
                are designed for serial computation which means that they use a single processor 
                to perform computations. These algorithms can be improved upon by modifying them 
                to use multiple processing elements. The purpose of this research is to modify 
                existing protein clustering algorithm and apply parallelisation techniques on 
                them in order to optimise protein sequencing operation for faster results without
                 sacrificing accuracy.
                </div>
                <br/>
                <div className="project-links">
                    <Button variant="contained" 
                        size='large' className='home-btn'
                        id="project-btn"
                        onClick={() => {
                            window.open("https://github.com/dhruvdhar1/PClust_parallel", "_blank", "noreferrer");
                        }}>
                            Github link
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" 
                        size='large' className='home-btn'
                        id="project-btn"
                        onClick={() => {
                            window.open("https://github.com/dhruvdhar1/PClust_parallel", "_blank", "noreferrer");
                        }}>
                            Published paper
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Projects