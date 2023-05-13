import { useEffect, useState } from "react";

function TimelineItem({item, skills, isInView, delay}) {
    const [inViewPort, setInviewPort] = useState(false)
    useEffect(()=>{
        isInView? setInviewPort(true): setInviewPort(false)
    },[isInView])
    return (
        <li className="timeline-item">
            <div>
                <h6 style={{overflow:'hidden'}}><span data-aos="slide-up" data-aos-delay={delay} className={`aos-init ${inViewPort ? 'aos-animate':''}`}>{item.start? item.start + ' - ' :"Finished: "}{item.end? item.end:"Present"}</span></h6>
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
        </li>
     );
}

export default TimelineItem;