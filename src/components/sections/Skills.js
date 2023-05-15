import React from 'react';
import Progress from '../Progress';
import SectionWrapper from '../SectionWrapper';


import {useInView} from 'react-cool-inview'

function Skills({items }) {
    const { observe, inView } = useInView({
      // Stop observe when the target enters the viewport, so the "inView" only triggered once
      unobserveOnEnter: true,
      // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
      rootMargin: "-100px 0px",
    });

    return (
        <SectionWrapper title="skills">
            <div className="row row-cols-1 row-cols-sm-2" ref={observe}>
                {
                    items
                    ? items.data.sort((a,b)=>b.score - a.score).map(item => {
                        const {id, label, score, rank } = item
                    return(
                        <div className={`col`} key={id}>
                            <Progress isInView={inView} label={label} rank={rank} score={score} />
                        </div>
                    )})
                    : "Loading"
                }

            </div>
        </SectionWrapper>
     );
}

export default Skills;