import React from 'react'
import "./style.css";

export default function Home() {
    return (
        <div className="parallax">
            <div className="container">
                <div className="row row-cols-md-2 row-cols-sm-1 row-parallax">
                    <div className="col-md-7 col-adj">
                        <div className="jumbotron">
                            <h1 className="display-4">About Me</h1>
                            <hr className="my-4"></hr>
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require(`../../Assets/Zack-headshot.jpg`)} className="d-block w-100 zacks_face" alt="headshot"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require(`../../Assets/IMG_2817.JPG`)} className="d-block w-100 hike" alt="hike"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../../Assets/IMG_1458.JPG")} className="d-block w-100 soccer" alt="soccer"></img>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <p>I am a full stack web developer and seasoned operations leader with extensive experience in coding and managing people. I have a certificate from University of Washington Professional and Continuing Education in full stack web technologies, including Javascript, CSS, HTML5, Node.js, MongoDB, React.js, Github, MERN stack, Express.js, Java, jQuery and MySQL. Prior to web development I gained years of experience leading large teams of 90+ people. I am also certified in Lean SIx Sigma, Ken Blanchard Situational Leadership and Google Professional IT. I am fascinated by web development and thoroughly enjoy learning coding languages. My technical ability in coding and my extensive leadership experience combined with proficient problem solving abilities and determination make me a powerful addition to any development team. </p>
                        </div>
                    </div>
                    <div className="col-md-5 col-adj">
                        <div className="row">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Background
                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            I am originally from a small town called Shelton, Washington. I have lived in Seattle since 2012. The majority of my work history is in Operations, I have worked for Hyatt hotels for the past six years. I have always been very interested in technology and I enjoy learning new things to challenging myself in different ways.
                          </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Leadership Skills
                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"> Program Management |</li>
                                                <li className="list-inline-item"> Operations Management |</li>
                                                <li className="list-inline-item"> Leadership Development |</li>
                                                <li className="list-inline-item"> Customer Relationship Management |</li>
                                                <li className="list-inline-item"> Productivity Analysis |</li>
                                                <li className="list-inline-item"> Operating Budgets |</li>
                                                <li className="list-inline-item"> Colleague Engagement |</li>
                                                <li className="list-inline-item"> Scheduling |</li>
                                                <li className="list-inline-item"> Guest Service Management |</li>
                                                <li className="list-inline-item"> Guest Recovery |</li>
                                                <li className="list-inline-item"> Supply Chain Management |</li>
                                                <li className="list-inline-item"> Communication |</li>
                                                <li className="list-inline-item"> Payroll |</li>
                                                <li className="list-inline-item"> Recruiting |</li>
                                                <li className="list-inline-item"> Guest Experience |</li>
                                                <li className="list-inline-item"> Accounting |</li>
                                                <li className="list-inline-item"> Customer Satisfaction |</li>
                                                <li className="list-inline-item"> Technical Support |</li>
                                                <li className="list-inline-item"> Coaching |</li>
                                                <li className="list-inline-item"> Interviewing |</li>
                                                <li className="list-inline-item"> Training |</li>
                                                <li className="list-inline-item"> Microsoft Office Suite |</li>
                                                <li className="list-inline-item"> Tableau |</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Technical Skills
                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <ol className="list-inline">
                                                <li className="list-inline-item"> Javascript |</li>
                                                <li className="list-inline-item"> Java |</li>
                                                <li className="list-inline-item"> jQuery |</li>
                                                <li className="list-inline-item"> Node.js |</li>
                                                <li className="list-inline-item"> MongoDB |</li>
                                                <li className="list-inline-item"> Mongoose |</li>
                                                <li className="list-inline-item"> React.js |</li>
                                                <li className="list-inline-item"> Github |</li>
                                                <li className="list-inline-item"> Git |</li>
                                                <li className="list-inline-item"> MySQL |</li>
                                                <li className="list-inline-item"> Sequelize |</li>
                                                <li className="list-inline-item"> MERN stack |</li>
                                                <li className="list-inline-item"> Express.js |</li>
                                                <li className="list-inline-item"> Java |</li>
                                                <li className="list-inline-item"> jQuery |</li>
                                                <li className="list-inline-item"> CSS |</li>
                                                <li className="list-inline-item"> HTML5 |</li>
                                                <li className="list-inline-item"> Heroku |</li>
                                                <li className="list-inline-item"> VS Code |</li>
                                                <li className="list-inline-item"> Tableau |</li>
                                                <li className="list-inline-item"> Microsoft Office</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-adj">
                                <div className="list-group">
                                    <a href={require("../../Assets/Zachary Deacon Resume V2.pdf")} className="list-group-item list-group-item-action" target="_blank"> <img src="https://www.freeiconspng.com/uploads/resume-icon-png-1.png" alt="resume icon" className="resume img-fluid"></img> Resume</a>
                                    <a href={require("../../Assets/Letters of Reccomendation.pdf")} className="list-group-item list-group-item-action" target="_blank"> <img src="https://cdn3.iconfinder.com/data/icons/management-and-achivement/100/business_achivement_management-08-512.png" alt="Letters of reference" className="reference img-fluid"></img> Reference</a>
                                    <a href="https://www.linkedin.com/in/zachary-deacon/" className="list-group-item list-group-item-action" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1024px-Linkedin_icon.svg.png" alt="LinkedIn" className="linkedin img-fluid"></img> LinkedIn</a>
                                    <a href="https://github.com/zackdeacon" className="list-group-item list-group-item-action" target="_blank"> <img src="https://cdn3.iconfinder.com/data/icons/social-media-and-logos-brush/32/github_social_media_logo-512.png" alt="Github" className="github img-fluid"></img> Github</a>
                                    <a href="https://www.instagram.com/zackdeacon/" className="list-group-item list-group-item-action" tabIndex="-1" aria-disabled="true" target="_blank"> <img src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300" alt="instagram icon" className="insta img-fluid"></img> Instagram</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-adj">
                                <div className="list-group">
                                    <a href={require("../../Assets/Yellow belt certificate .pdf")} className="list-group-item list-group-item-action" target="_blank"> <img src="https://www.pngfind.com/pngs/m/507-5072232_certification-icon-hd-png-download.png" alt="resume icon" className="resume img-fluid"></img>Lean Six Sigma</a>
                                    <a href={require("../../Assets/Google IT Cert.pdf")} className="list-group-item list-group-item-action" target="_blank"> <img src="https://www.pngfind.com/pngs/m/507-5072232_certification-icon-hd-png-download.png" alt="Letters of reference" className="reference img-fluid"></img> Google IT</a>
                                    <a href={require("../../Assets/situational leadership certification.pdf")} className="list-group-item list-group-item-action" target="_blank"> <img src="https://www.pngfind.com/pngs/m/507-5072232_certification-icon-hd-png-download.png" alt="LinkedIn" className="linkedin img-fluid"></img> Ken Blanchard</a>
                                    <a href={require("../../Assets/bootcampCert.jpeg")} className="list-group-item list-group-item-action" target="_blank"> <img src="https://www.pngfind.com/pngs/m/507-5072232_certification-icon-hd-png-download.png" alt="bootcamp certification icon" className="resume img-fluid"></img>Full Stack Bootcamp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
