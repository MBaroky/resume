import React from "react";

// components
import SectionWrapper from "../SectionWrapper";
import Gallery from "../Gallery";

function Samples({ items, navDirection }) {
  const getIdFromTypeName = (str) =>{
    return str.toLowerCase().replace(" ",'-')
  }
  return (
    items?
    <SectionWrapper navDirection={navDirection} title="samples">

      <div>
            <ul className='nav nav-pills nav-fill' role='tablist'>
              {items.types.map((type, index)=>{
                return (

              <li key={index} className='nav-item' role='presentation'>
                <a
                  className={`nav-link ${index === 0?'active':''}`}
                  role='tab'
                  data-bs-toggle='pill'
                  href={`#${getIdFromTypeName(type.name)}`}>
                  {type.name}
                </a>
              </li>
              )})}
            </ul>
            <div className='tab-content'>
              {items.types.map((type, index)=>{
                const galleryItems = items.data.filter((item=>(item.type === type.id)))
                return(
                  <div
                    key={index}
                    className={`tab-pane ${index === 0?'active':''}`}
                    role='tabpanel'
                    id={getIdFromTypeName(type.name)}>
                      {galleryItems.length > 0 ? <Gallery items={galleryItems} type={type.name} /> : "Tab-Panel " + {index}}
                  </div>
              )})}
            </div>
          </div>
    </SectionWrapper>
    :"Loading"
  );
}

export default Samples;
