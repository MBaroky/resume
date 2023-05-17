// libs
import React from "react";
import { useState, useEffect } from "react";

// utils
import data from "./data.json";
import "./App.scss";

// comps
import Header from "./components/Header";
import BodyWrapper from "./components/BodyWrapper";

function App() {
  // Using state to store the data from the JSON file
  const [jsonData, setJsonData] = useState([]);

  // Using useEffect to load the data once the component mounts
  useEffect(() => {
    setJsonData(data);
  }, []);

  // fixing: js file loaded before element render
  const [childLoaded, setChildLoaded] = useState(false);

  useEffect(() => {
    if (childLoaded) {
      const script = document.createElement("script");
      script.src = "./assets/js/theme.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
    console.log(`childloaded: ${childLoaded}`);
  }, [childLoaded]);

  // handling navigation direction
  const [navDirection, setNavDirection] = useState({});
  return (
    <div id='wrapper'>
      <span id='page-top'></span>
      <Header
        menu={jsonData.find(({ name }) => name === "menu-items")}
        setChildState={setChildLoaded}
        navState={{ setNavDirection, navDirection }}
      />
      <BodyWrapper data={jsonData} navDirection={navDirection} />
      {/* to top button */}
      <a
        style={{ opacity: 0 }}
        className='border rounded d-inline scroll-to-top'
        href='#page-top'>
        <i className='fas fa-angle-up'></i>
      </a>
    </div>
  );
}

export default App;
