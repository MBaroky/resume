import React from "react";
import Social from "./Social";
import { ReactComponent as ToggleButton } from "../icons/toggleButton.svg";

function Profile({ content }) {
  const profileData = content ? content.data : false;

  return (
    <div
      className='col-md-4'
      id='card-warpper'
      style={{ zIndex: 1000 }}>
      <div id='card-top'>
        {
          // eslint-disable-next-line
        }{" "}
        <button
          className='btn btn-dark d-md-none'
          id='sidebarToggleTop'>
          <ToggleButton />
        </button>
        <div className='card mb-3 bg-transparent'>
          <div className='card-body text-center'>
            <div
              className='border rounded-circle d-none d-sm-none d-md-inline-block mb-3 mt-4 p-2'
              id='profile-picture'>
              <img
                alt='alt-text'
                className='rounded-circle border border-light img-fluid'
                src={profileData ? profileData.image : ""}
              />
            </div>
            <h2 className='text-center text-light card-title fw-bold'>
              {profileData ? profileData.name : ""}
            </h2>
            <h4 className='text-center card-title'>
              {profileData ? profileData.title : ""}
            </h4>
          </div>
        </div>
      </div>
      <div id='card-bottom'>
        <div className='mb-3'>
          <ul
            className='list-inline text-center mt-2'
            id='social-icons'>
            {profileData
              ? profileData["social-icons"].map((icon, index) => (
                  <Social content={icon} key={index} />
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
