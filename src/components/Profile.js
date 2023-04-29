import React from 'react';
import Social from './Social';

function Profile({content}) {
    const profileData = content? content.data : false;

    return (
    <div className="col-md-4" id="card-warpper">
        <div id="card-top">
            {// eslint-disable-next-line
            }            <a className="btn btn-dark d-md-none" href="#" role="button" id="sidebarToggleTop"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-list">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
            </a>
            <div className="card mb-3 bg-transparent">
                <div className="card-body text-center">
                    <div className="border rounded-circle d-none d-sm-none d-md-inline-block mb-3 mt-4 p-2" id="profile-picture"><img alt="alt-text"  className="rounded-circle border border-light img-fluid" src={profileData? profileData.image :""} /></div>
                    <h2 className="text-center text-light card-title fw-bold">{profileData? profileData.name :""}</h2>
                    <h4 className="text-center card-title">{profileData? profileData.title :""}</h4>
                </div>
            </div>
        </div>
        <div id="card-bottom">
            <div className="mb-3">
                <ul className="list-inline text-center mt-2" id="social-icons">
                    {profileData
                        ? profileData["social-icons"].map((icon, index) => (<Social content={icon} key={index} />))
                        :""
                    }
                </ul>
            </div>
        </div>
    </div> );
}

export default Profile;