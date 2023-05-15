import React from 'react';
import SectionWrapper from './SectionWrapper';
import {useInView} from 'react-cool-inview'
import TimelineItem from './TimelineItem';

function Timeline({items, skills, id, type }) {

    const { observe, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: true,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        rootMargin: "-100px 0px",
      });
    const sortList = (list)=>{
        const newList = list.sort((a,b)=>{
            const timeStampA = Date.parse(a.end)?Date.parse(a.end):new Date().getTime()
            const timeStampB = Date.parse(b.end)?Date.parse(b.end):new Date().getTime()

            return timeStampB - timeStampA
        })

        return newList
    }
    return (
        <SectionWrapper  title={id}>
            <ul className="list-unstyled timeline p-0" ref={observe}>
                {
                    items
                    ? sortList(items.data.filter(item=>item.type === type)).map((item, index)=>
                        (
                            <TimelineItem isInView={inView} item={item} skills={skills} key={index} delay={index*400} />
                        ))
                    :"Loading..."
                }
            </ul>
        </SectionWrapper>
     );
}

export default Timeline;