import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

function SectionWrapper({ children, title, navDirection }) {
  const animationCode = direction => {
    const name = direction;
    return {
      name,
      initial: {
        transform:
          name === "next" ? "translateX(-100%)" : "translateX(100%)",
        opacity: 0,
        position: "absolute",
      },
      animate: {
        transform: "translateX(0%)",
        opacity: 1,
        position: "relative",
      },
      exit: {
        transform:
          name === "next" ? "translateX(100%)" : "translateX(-100%)",
        opacity: 0,
        position: "absolute",
      },
    };
  };

  const handleDirection = direction => {
    if (direction) {
      // direction right (next)
      return animationCode("next");
    } else {
      // direction left (prev)
      return animationCode("prev");
    }
  };

  const [sliderOptions, setSliderOptions] = useState(
    handleDirection(navDirection.dir)
  );

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(navDirection);
    setSliderOptions(handleDirection(navDirection.dir));
    console.log(
      "direction:",
      navDirection.dir ? "next " : "prev ",
      "Bye, ",
      title
    );
    // eslint-disable-next-line
  }, [navDirection.dir]);

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        style={{ width: "100%" }}
        className='main__container'
        {...sliderOptions}
        transition={{
          duration: 1.2,
          ease: [0.6, -0.05, 0.01, 0.99],
          delay: 0.1,
        }}>
        <section
          id={title.toLowerCase().replace(" ", "-")}
          className='p-lg-4'>
          <div className='card bg-transparent p-4 border-0'>
            <div className='card-header bg-transparent py-3 px-0'>
              <h6 className={`fw-bold m-0`}>
                <strong>{title}</strong>
              </h6>
            </div>
            <div className='card-body px-0'>{children}</div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default SectionWrapper;
