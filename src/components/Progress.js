import React, {useState, useEffect} from 'react';

function Progress({label, rank, score, isInView}) {
    const [progressWidth, setProgressWidth] = useState(0)
    useEffect(()=>{
        isInView? setProgressWidth(score) : setProgressWidth(progressWidth)
    }, [isInView, score, progressWidth])

    return (
        <div>
            <h4 className="small fw-bold">{label}<span className="float-end">{rank}</span></h4>
            <div className="progress border rounded-pill progress-md mb-3">
                <div
                // data-aos='slide-right'
                className={`progress-bar`}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: `${progressWidth}%`}}>
                    <span className="visually-hidden">{score}</span>
                </div>
            </div>
        </div>
     );
}

export default Progress;