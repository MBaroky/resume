// libs
import React from "react";
import Timeline from "../Timeline";

function Education({ items, skills, navDirection }) {
  return (
    <Timeline
      items={items}
      skills={skills}
      navDirection={navDirection}
      id='education'
      type='education'
    />
    // </motion.main>
  );
}

export default Education;
