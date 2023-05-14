import { useEffect, useState } from "react";

function TimelineItem({ item, skills, isInView, delay }) {
  const [inViewPort, setInviewPort] = useState(false);

  // conditional class name for aos animation when inview is triggered

  const sharedClassName = `aos-init ${
    inViewPort ? "aos-animate" : ""
  }`;

  // repeated props in sub elements
  const sharedAosProps = {
    "data-aos": "slide-up",
    "data-aos-delay": delay,
    className: sharedClassName,
  };

  useEffect(() => {
    isInView ? setInviewPort(true) : setInviewPort(false);
  }, [isInView]);

  return (
    <li
      data-delay={delay}
      className={`${inViewPort ? "active" : ""}`}>
      <div>
        <h6 className='overflow-hidden'>
          <div {...sharedAosProps}>
            {item.start ? item.start + " - " : "Finished: "}
            {item.end ? item.end : "Present"}
          </div>
        </h6>
        <h4 className='overflow-hidden'>
          <div {...sharedAosProps}>{item.place}</div>
        </h4>
        <div className='overflow-hidden'>
          <p {...sharedAosProps}>{item.title}</p>
        </div>
      </div>
      <ul className='list-inline'>
        {item.skills
          ? item.skills.map((skill, index) => (
              <li
                key={skill}
                className='list-inline-item overflow-hidden'>
                <div
                  data-aos={sharedAosProps["data-aos"]} // taking only the direction bc delay math is diff
                  data-aos-delay={delay + index * 100}
                  className={sharedClassName}>
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
