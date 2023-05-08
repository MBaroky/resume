import React from 'react';

function SectionWrapper({children, title}) {
    return (
        <section id={title.toLowerCase().replace(' ','-')} className="p-lg-4">
                <div className="card bg-transparent p-4 border-0">
                    <div className="card-header bg-dark py-3 px-0">
                        <h6 className="fw-bold m-0"><strong>{title}</strong></h6>
                    </div>
                    <div className="card-body px-0">
                        {children}
                    </div>
                </div>
            </section>
     );
}

export default SectionWrapper;