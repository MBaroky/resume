import React from "react";
import { useState, useEffect } from "react";
import data from "./data.json";
import "./App.scss";

import Header from "./components/Header";
import BodyWrapper from "./components/BodyWrapper";

function App() {
  // Using state to store the data from the JSON file
  const [jsonData, setJsonData] = useState([]);

  // Using useEffect to load the data once the component mounts
  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div id='wrapper'>
      <Header
        menu={jsonData.find(({ name }) => name === "menu-items")}
      />
      <BodyWrapper data={jsonData} />
      {/* to top button */}
      <a
        className='border rounded d-inline scroll-to-top'
        href='#page-top'>
        <i className='fas fa-angle-up'></i>
      </a>
    </div>
  );
}

export default App;
