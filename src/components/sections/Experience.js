import React from 'react';

function Experience({items, skills}) {
    return (
        <section id="experience" className="p-lg-4">
                <div className="card bg-transparent p-4 border-0">
                    {/* TODO: a heading component (or not!) */}
                    <div className="card-header bg-dark py-3 px-0">
                        <h6 className="fw-bold m-0"><strong>Experience</strong></h6>
                    </div>
                    <div className="card-body px-0">

                        {/* TODO: list of evenets using data */}
                        <ul>
                            {
                                items
                                ? items.data.filter(item=>item.type === 'work').sort((a,b)=>{return b.id - a.id}).map(item=>(<li>{item.title}</li>))
                                :"Error"

                            }
                            {
                                skills?
                                skills.data.map(item=>(item.label))
                                :"Error"
                            }
                        </ul>
                        <ul className="list-unstyled timeline p-0">
                            <li>
                                <div>
                                    <h6>January 2016 - Present<br /></h6>
                                    <h4>Yellow Media- an Egypt Yellow Pages Company<br /></h4>
                                    <p>Web Designer/ Front-end Developer</p>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">HTML5</span></h5>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div>
                                            <h5><span className="badge bg-secondary text-dark">CSS3</span></h5>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <h6>November 2014 - February 2015</h6>
                                    <h4>PSO Digital</h4>
                                    <p>Web Designer</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h6>November 2013 - November 2014</h6>
                                    <h4>MehwartvChannel</h4>
                                    <p>Web Designer, 2-D Graphic Designer</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h6>May 2010 - October 2013</h6>
                                    <h4>Egyptian Company For International Trade - Belco</h4>
                                    <p>Accountant</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
     );
}

export default Experience;