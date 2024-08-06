import React from "react";
import Header_components from "../all_shared/Header";
import Heading from "../all_shared/Heading";
import Description from "../all_shared/description";



const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <Description title="Musfiqur Rahman" size="42px" />
            <Heading title="Dance Artist" size="32px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
