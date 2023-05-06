import React from 'react';

function Skills({items}) {
    return (
        <section id="skills" className="p-lg-4">
                <div className="card bg-transparent p-4 border-0">
                    <div className="card-header bg-dark py-3 px-0">
                        <h6 className="fw-bold m-0"><strong>SKILLS</strong></h6>
                    </div>
                    <div className="card-body px-0">
                        <div className="row row-cols-1 row-cols-sm-2">
                            {
                                items
                                ? items.data.sort((a,b)=>b.score - a.score).map(item => (
                                    <div className="col" key={item.id}>
                                        <div>
                                            <h4 className="small fw-bold">{item.label}<span className="float-end">{item.rank}</span></h4>
                                            <div className="progress border rounded-pill progress-md mb-3">
                                                <div className="progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: `${item.score}%`}}><span className="visually-hidden">{item.score}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : "Loading"
                            }

                        </div>
                    </div>
                </div>
            </section>
     );
}

export default Skills;