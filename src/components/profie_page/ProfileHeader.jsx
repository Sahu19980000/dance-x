import React from "react";
import Header_components from "../all_shared/Header";
import Heading from "../all_shared/Heading";


const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h2>Musfiqur Rahman</h2>
            <Heading title="Dance Artist" size="32px" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
