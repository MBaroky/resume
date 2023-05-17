import React from "react";

// components
import Timeline from "../Timeline";

function Experience({ items, skills, navDirection }) {
  return (
    <Timeline
      items={items}
      skills={skills}
      navDirection={navDirection}
      id='experience'
      type='work'
    />
  );
}

export default Experience;
