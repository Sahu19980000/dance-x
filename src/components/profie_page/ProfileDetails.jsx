import React from "react";
import profile_icon_1 from "../../assets/profile-icon-1.png";
import profile_icon_2 from "../../assets/profile-icon-2.png";
import profile_icon_3 from "../../assets/profile-icon-3.png";
import profile from "../../assets/profile.png";
import Heading from "../all_shared/Heading";
import Description from "../all_shared/description";
import card_one from "../../assets/Card 2.png"
import card_two from "../../assets/Card 2.png"
import card_three from "../../assets/Card 2.png"


const ProfileDetails = () => {
  return (
    <div className="profile-details">
          <div className="row">
            <div className="col-md-6">
              <img
                src={profile}
                className="rounded-circle img-fluid "
                alt="Profile"
              />
              <Description title="musfiqur@gmail.com" size="18px" />
            </div>
            <div className="col-md-6">
              <div className="profile-stats d-flex align-items-center">
                <span >
                  <img
                    src={profile_icon_1}
                    className="img-fluid"
                    width="50"
                    height="50"
                  />
                  <Heading title="Reviews: 68" color="#000" size="24px" />
                </span>

                <span>
                  <img
                    src={profile_icon_2}
                    className="img-fluid"
                    width="50"
                    height="50"
                  />
                  <Heading title="Likes: 07" color="#000" size="24px" />
                </span>
                <span>
                  <img
                    src={profile_icon_3}
                    className="img-fluid"
                    width="50"
                    height="50"
                  />
                  <Heading title="Rating: 06" color="#000" size="24px" />
                </span>
              </div>
            </div>
          </div>

        <div className="row">
        <div className="col-md-4">
          <Heading title="Experience:" size="28px" />
          <Description title="4 Years" size="21px" align="center" />
        </div>
        <div className="col-md-4">
        <Heading title="Location:" size="28px" />
        <Description title="Lorem Ipsum is simply dummy printing." size="21px" />
        </div>
        <div className="col-md-4">
        <Heading title="Dance Forms:" size="28px" />
        <Description title="Hip Hop, Lorem Ipsum, Lorem Ipsum" size="21px" />
        </div>
      </div>
      <div className="skills" />
      <div className="row ">
        <div className="col-12">
          <Heading title="Skills" />
          <div className="skills-images d-flex justify-content-center">
            <img src={card_one} alt="skill 1" className="img-thumbnail" />
            <img src={card_one} alt="skill 2" className="img-thumbnail" />
            <img src={card_one} alt="skill 3" className="img-thumbnail" />
          </div>
        </div>
      </div> 
      </div>
        )
};

export default ProfileDetails;
