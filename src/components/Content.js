import React from 'react';
import About from './sections/About';
import Experience from './sections/Experience';


function Content({content}) {
    return (

        <div className="col-md-8 offset-md-4 text-light" id="data-wrapper">
            <About />
            <Experience items={content.find(({name}) => name === "history")} skills={content.find(({name}) => name === "skills")} />
            <section id="education" className="p-lg-4">
                <div className="card bg-transparent p-4 border-0">
                    <div className="card-header bg-dark py-3 px-0">
                        <h6 className="fw-bold m-0"><strong>Education</strong></h6>
                    </div>
                    <div className="card-body px-0">
                        <ul className="list-unstyled timeline p-0">
                            <li>
                                <div>
                                    <h6>Finished: Feb 2023<br /></h6>
                                    <h4>Cambridge CS50x Course<br /></h4>
                                    <p>Introduction to Computer Science</p>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">C Language</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">Python</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">SQLite3</span></h5>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <h6>Finished:&nbsp;Jun 2021</h6>
                                    <h4>Udacity - FWD initiative</h4>
                                    <p>Front End development - Advanced track<br /></p>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">Saas</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">WebPack</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">ReactJs</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">Redux</span></h5>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <h6>Finished:&nbsp;Feb 2021</h6>
                                    <h4>Udacity - FWD initiative</h4>
                                    <p>Web development - professional track<br /></p>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">Javascript</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">NodeJs</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">Express</span></h5>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <h6>Finished: Jul 2009</h6>
                                    <h4> ITI - Information Technology Institute</h4>
                                    <p>English Course&nbsp;</p>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">English</span></h5>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <h6>2005 - 2009 </h6>
                                    <h4>Cairo University </h4>
                                    <p>Bachelor of Science (BS), Accounting</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="skills" className="p-lg-4">
                <div className="card bg-transparent p-4 border-0">
                    <div className="card-header bg-dark py-3 px-0">
                        <h6 className="fw-bold m-0"><strong>SKILLS</strong></h6>
                    </div>
                    <div className="card-body px-0">
                        <div className="row row-cols-1 row-cols-sm-2">
                            <div className="col">
                                <div>
                                    <h4 className="small fw-bold">HTML<span className="float-end">20%</span></h4>
                                    <div className="progress border rounded-pill progress-md mb-3">
                                        <div className="progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}><span className="visually-hidden">20%</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h4 className="small fw-bold">CSS<span className="float-end">20%</span></h4>
                                    <div className="progress border rounded-pill progress-md mb-3">
                                        <div className="progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}><span className="visually-hidden">20%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="samples" className="p-lg-4">
                <div className="card bg-transparent p-4 border-0">
                    <div className="card-header bg-dark py-3 px-0">
                        <h6 className="fw-bold m-0"><strong>Samples</strong></h6>
                    </div>
                    <div className="card-body px-0">
                        <div>
                            <ul className="nav nav-pills nav-fill" role="tablist">
                                <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="pill" href="#tab-1">Screenshots</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="pill" href="#tab-2">Videos</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="pill" href="#tab-3">Live</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" role="tabpanel" id="tab-1">
                                    <div className="row photos gallery" data-bss-baguettebox="">
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                    </div>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="tab-2">
                                    <div className="row photos gallery" data-bss-baguettebox="">
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="https://youtu.be/xRhhd14-SCw" target="_blank" rel="noopener noreferrer"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                    </div>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="tab-3">
                                    <div className="row photos gallery" data-bss-baguettebox="">
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Content;