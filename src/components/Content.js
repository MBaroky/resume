// libs
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Samples from "./sections/Samples";
import Skills from "./sections/Skills";
import NotFound from "./NotFound";

function Content({ content, navDirection }) {
  const location = useLocation();

  const getRelativeData = keyword =>
    content.find(({ name }) => name === keyword);

  const history = getRelativeData("history");
  const skillsList = getRelativeData("skills");
  const portfolio = getRelativeData("portfolio");
  const about = getRelativeData("about");
  // const pages = getRelativeData("menu-items")

  return (
    <div
      className='col-md-8 offset-md-4 text-light overflow-hidden'
      id='data-wrapper'>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            exact
            element={
              <About content={about} navDirection={navDirection} />
            }
          />
          <Route
            path='/experience'
            element={
              <Experience
                items={history}
                navDirection={navDirection}
                skills={skillsList}
              />
            }
          />
          <Route
            path='/education'
            element={
              <Education
                items={history}
                navDirection={navDirection}
                skills={skillsList}
              />
            }
          />
          <Route
            path='/skills'
            element={
              <Skills
                navDirection={navDirection}
                items={skillsList}
              />
            }
          />
          <Route
            path='/samples'
            element={
              <Samples
                navDirection={navDirection}
                items={portfolio}
              />
            }
          />
          {/* 404 handling */}
          <Route path='*' Component={NotFound} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Content;
