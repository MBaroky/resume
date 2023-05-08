import React from 'react';
import SectionWrapper from './SectionWrapper';

function Timeline({items, skills, id, type}) {
    const sortList = (list)=>{
        const newList = list.sort((a,b)=>{
            const timeStampA = Date.parse(a.end)?Date.parse(a.end):new Date().getTime()
            const timeStampB = Date.parse(b.end)?Date.parse(b.end):new Date().getTime()

            return timeStampB - timeStampA
        })

        return newList
    }
    return (
        <SectionWrapper title={id}>

            <ul className="list-unstyled timeline p-0">
                            {
                                items
                                ? sortList(items.data.filter(item=>item.type === type)).map(item=>{
                                    return (<li key={item.id}>
                                        <div>
                                            <h6>{item.start? item.start + ' - ' :"Finished: "}{item.end? item.end:"Present"}<br /></h6>
                                            <h4>{item.place}<br /></h4>
                                            <p>{item.title}</p>
                                        </div>
                                        <ul className="list-inline">


                                            {
                                                item.skills?
                                                item.skills.map(skill=>(
                                                    <li key={skill} className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">{skills.data.find(({id})=> id === skill).label}</span></h5>
                                                        </div>
                                                    </li>

                                                ))
                                                :""
                                            }
                                        </ul>
                                    </li>)})
                                :"Loading..."

                            }

                        </ul>
        </SectionWrapper>
     );
}

export default Timeline;