import React, { Fragment } from "react";
import Profile from "./Profile";
import Content from "./Content";

function BodyWrapper({ data, navDirection }) {
  return (
    <div
      className='d-flex flex-column'
      id='content-wrapper'
      style={{ minHeight: "100vh", boxSizing: "border-box" }}>
      <div id='content'>
        <div className='container-fluid p-0'>
          <div className='row g-0'>
            {data ? (
              <Fragment>
                <Profile
                  content={data.find(
                    ({ name }) => name === "profile"
                  )}
                />
                {/* content */}
                <Content content={data} navDirection={navDirection} />
              </Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyWrapper;
