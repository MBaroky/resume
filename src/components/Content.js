import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Samples from "./sections/Samples";
import Skills from "./sections/Skills";
import NotFound from "./NotFound";

function Content({ content }) {
  const getRelativeData = (keyword) => (
    content.find(({ name }) => name === keyword)
  )
  const history = getRelativeData("history");
  const skillsList = getRelativeData("skills");
  const portfolio = getRelativeData("portfolio");
  const about = getRelativeData("about");
  // const pages = getRelativeData("menu-items")




  return (
    <div
    className='col-md-8 offset-md-4 text-light'
    id='data-wrapper' style={{minHeight:'100vh', boxSizing:'border-box'}}>
      <Routes>
        <Route path='/' exact element={
          <About content={about}  />
        } />
        <Route path='/experience' element={
          <Experience items={history} skills={skillsList} />
        } />
        <Route path="/education" element={
          <Education items={history} skills={skillsList}  />
        } />
        <Route path='/skills' element={
          <Skills items={skillsList}  />
        } />
        <Route path="/samples" element={
          <Samples items={portfolio}  />
        } />
        <Route path="*" Component={NotFound}  />


      </Routes>
    </div>
  );
}

export default Content;
