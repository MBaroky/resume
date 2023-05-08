import React from 'react';
import SectionWrapper from '../SectionWrapper';

function Skills({items}) {
    return (
        <SectionWrapper title="skills">
            <div className="row row-cols-1 row-cols-sm-2">
                            {
                                items
                                ? items.data.sort((a,b)=>b.score - a.score).map(item => {
                                    const {id, label, score, rank } = item
                                return(
                                    <div className="col" key={id}>
                                        <div>
                                            <h4 className="small fw-bold">{label}<span className="float-end">{rank}</span></h4>
                                            <div className="progress border rounded-pill progress-md mb-3">
                                                <div className="progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: `${score}%`}}><span className="visually-hidden">{score}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                )})
                                : "Loading"
                            }

                        </div>
        </SectionWrapper>
     );
}

export default Skills;