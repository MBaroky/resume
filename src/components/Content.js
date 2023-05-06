import React from 'react';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';


function Content({content}) {
    const history = content.find(({name}) => name === "history")
    const skillsList= content.find(({name}) => name === "skills")

    return (

        <div className="col-md-8 offset-md-4 text-light" id="data-wrapper">
            <About />
            <Experience items={history} skills={skillsList} />

            <Education items={history} skills={skillsList}  />

            <Skills items={skillsList} />
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