import "./Projects2.scss"
import Button from '@mui/material/Button';
import protein from "../assets/protein.gif"
import telemetry from "../assets/telemetry.gif"
import dbscan from "../assets/dbscan.gif"
import paxos from "../assets/paxos.gif"

const Projects2 = () => {
    return (
        <div className="project2-root" id="projects">
            <div className="project2-heading">PROJECTS</div>
            <div className="project2-header-underline"></div>

            <div className="project2-list">
                <div className="project2-list-item">
                    <div className="project2-item-img">
                        <img src={dbscan} className="project2-img-dim"/>
                    </div>
                    <div className="project2-item-desc">
                        <div className="project2-item-desc-heading">Data Clust</div>
                        <div className="project2-item-desc-container">
                            A collection of open-source unsupervised machine learning libraries written from scratch. 
                            These libraries provide a diverse set of tools to help you uncover hidden patterns, discover 
                            valuable insights, and solve complex problems in the realm of unsupervised machine learning.
                        </div>
                        <div className="project2-item-desc-tech">
                            Python&nbsp;&nbsp;&nbsp;
                            Scipy API&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="project2-item-desc-link">
                        <Button variant="contained" 
                            size='large' className='home-btn'
                            id="project-btn"
                            onClick={() => {
                                window.open("https://github.com/dhruvdhar1/data-clust", "_blank", "noreferrer");
                            }}>
                                Github link
                        </Button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="project2-list">
                <div className="project2-list-item-rev">
                    <div className="project2-item-img">
                        <img src={telemetry} className="project2-img-dim"/>
                    </div>
                    <div className="project2-item-desc-rev">
                        <div className="project2-item-desc-heading">Knight's Watch (*)</div>
                        <div className="project2-item-desc-container">
                            An project for tracking application telemetry information in almost real time. 
                            This application is
                            currently work in progress.
                        </div>
                        <div className="project2-item-desc-tech">
                            React&nbsp;&nbsp;&nbsp;
                            HTML+CSS&nbsp;&nbsp;&nbsp;
                            Node JS&nbsp;&nbsp;&nbsp;
                            Mongo&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="project2-item-desc-link">
                        <Button variant="contained" 
                            size='large' className='home-btn'
                            id="project-btn"
                            onClick={() => {
                                window.open("", "_blank", "noreferrer");
                            }}>
                                Github link
                        </Button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="project2-list">
                <div className="project2-list-item">
                    <div className="project2-item-img">
                        <img src={paxos} className="project2-img-dim"/>
                    </div>
                    <div className="project2-item-desc">
                        <div className="project2-item-desc-heading">Jaxos</div>
                        <div className="project2-item-desc-container">
                        This project is a Java implementation of the Paxos algorithm, 
                        a robust and distributed consensus protocol, used to ensure fault-tolerant and consistent 
                        decision-making in distributed systems.
                        </div>
                        <div className="project2-item-desc-tech">
                            Java&nbsp;&nbsp;&nbsp;
                            RMI&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="project2-item-desc-link">
                            <Button variant="contained" 
                                size='large' className='home-btn'
                                id="project-btn"
                                onClick={() => {
                                    window.open("https://github.com/dhruvdhar1/Jaxos", "_blank", "noreferrer");
                                }}>
                                    Github link
                            </Button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="project2-list">
                <div className="project2-list-item-rev">
                    <div className="project2-item-img">
                        <img src={protein} className="project2-img-dim"/>
                    </div>
                    <div className="project2-item-desc-rev">
                        <div className="project2-item-desc-heading">pClust</div>
                        <div className="project2-item-desc-container">
                        Proteins are the building blocks of all living organisms and its 
                        analysis through clustering can help us understand the bimolecular mechanics of living organisms. 
                        This project attemts to parallelize existing protein clustering algorithm to optimize protein sequencing for faster 
                        results without sacrificing accuracy.
                        </div>
                        <div className="project2-item-desc-tech">
                            C&nbsp;&nbsp;&nbsp;
                            Python&nbsp;&nbsp;&nbsp;
                            Qt designer&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="project2-item-desc-link">
                        <Button variant="contained" 
                            size='large' className='home-btn'
                            id="project-btn"
                            onClick={() => {
                                window.open("https://github.com/dhruvdhar1/PClust_parallel", "_blank", "noreferrer");
                            }}>
                                Github link
                        </Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects2