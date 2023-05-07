import React from "react";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Samples from "./sections/Samples";
import Skills from "./sections/Skills";

function Content({ content }) {
  const history = content.find(({ name }) => name === "history");
  const skillsList = content.find(({ name }) => name === "skills");
  const portfolio = content.find(({ name }) => name === "portfolio");

  return (
    <div
      className='col-md-8 offset-md-4 text-light'
      id='data-wrapper'>
      <About />
      <Experience items={history} skills={skillsList} />

      <Education items={history} skills={skillsList} />

      <Skills items={skillsList} />
      <Samples items={portfolio} />
    </div>
  );
}

export default Content;
