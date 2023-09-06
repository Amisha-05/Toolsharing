import React from 'react';
import Sidebar from '../component/Sidebar';
import './profilePage.css';

export default function ProfilePage() {
  return (
    <div className="gradient">
      <Sidebar />
      <div className="content">
        <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-9 col-xl-7">
            <div className="photocard">
              <div className="card-image-container">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Profile"
                  className="profile-image img-thumbnail"
                />
                <button className="edit-profile-button">Edit profile</button>
              </div>
              <div className="profile-info">
                <h5 className="profile-name">Andy Horwitz</h5>
                <p className="profile-location">New York</p>
              </div>
              <div className="profile-stats">
                <div className="profile-stat">
                  <p className="text mb-0">253</p>
                  <p className="text1">Photos</p>
                </div>
                <div className="profile-stat">
                  <p className="text mb-0">1026</p>
                  <p className="text1">Followers</p>
                </div>
                <div className="profile-stat">
                  <p className="text mb-0">478</p>
                  <p className="text1">Following</p>
                </div>
              </div>
              {/* <div className="about-section">
                <p className="bodyp">About</p>
                <div className="p-4">
                  <p className="cardtxt">Web Developer</p>
                  <p className="cardtxt">Lives in New York</p>
                  <p className="cardtxt1">Photographer</p>
                </div>
              </div> */}
            </div>
            <div className="recent-photos-section">
              <h5 className="recphotos">My Posts</h5>
              <a href="#!" className="text-muted">Show all</a>
              <div className="photo-container">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="Photo 1"
                  className="photo-image img-thumbnail"
                />
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="Photo 2"
                  className="photo-image img-thumbnail"
                />
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="Photo 3"
                  className="photo-image img-thumbnail"
                />
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="Photo 4"
                  className="photo-image img-thumbnail"
                />
                {/* Add more photos here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
