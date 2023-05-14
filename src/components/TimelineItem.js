import { useEffect, useState } from "react";

function TimelineItem({ item, skills, isInView, delay }) {
  const [inViewPort, setInviewPort] = useState(false);
  useEffect(() => {
    isInView ? setInviewPort(true) : setInviewPort(false);
  }, [isInView]);
  return (
    <li
      data-delay={delay}
      className={`${inViewPort ? "active" : ""}`}>
      <div>
        <h6 style={{ overflow: "hidden" }}>
          <div
            data-aos='slide-up'
            data-aos-delay={delay}
            className={`aos-init ${inViewPort ? "aos-animate" : ""}`}>
            {item.start ? item.start + " - " : "Finished: "}
            {item.end ? item.end : "Present"}
          </div>
        </h6>
        <h4 style={{ overflow: "hidden" }}>
          <div
            data-aos='slide-up'
            data-aos-delay={delay * 4}
            className={`aos-init ${inViewPort ? "aos-animate" : ""}`}>
            {item.place}
          </div>
        </h4>
        <p style={{ overflow: "hidden" }}>
          <div
            data-aos='slide-up'
            data-aos-delay={delay * 8}
            className={`aos-init ${inViewPort ? "aos-animate" : ""}`}>
            {item.title}
          </div>
        </p>
      </div>
      <ul className='list-inline'>
        {item.skills
          ? item.skills.map((skill, index) => (
              <li
                key={skill}
                className='list-inline-item'
                style={{ overflow: "hidden" }}>
                <div
                  data-aos='slide-up'
                  data-aos-delay={delay * index}
                  className={`aos-init ${
                    inViewPort ? "aos-animate" : ""
                  }`}>
                  <h5>
                    <span className='badge bg-secondary text-dark'>
                      {
                        skills.data.find(({ id }) => id === skill)
                          .label
                      }
                    </span>
                  </h5>
                </div>
              </li>
            ))
          : ""}
      </ul>
    </li>
  );
}

export default TimelineItem;
