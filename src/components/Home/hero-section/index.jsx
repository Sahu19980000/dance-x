import React from "react";
import reviews from "../../../assets/user-reviews.png";
import arrow_icon from "../../../assets/arrow-icon.png";
import logo from "../../../assets/dance-x-logo.png";
import social_icon_1 from "../../../assets/social-icon-1.png";
import social_icon_2 from "../../../assets/social-icon-2.png";
import social_icon_3 from "../../../assets/social-icon-3.png";
import social_icon_4 from "../../../assets/social-icon-4.png";
import social_icon_5 from "../../../assets/social-icon-5.png";
import Header_back from "../../../assets/header back.png"

import Heading from "../../all_shared/Heading";
import Description from "../../all_shared/description";
import Button_component from "../../all_shared/button";

const Hero_Section = () => {
  return (
    <div className="dance-hero-section-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <Heading
              title="5 Days Popping Course "
              color="white"
              textalign="center"
            />
            <p className="sub-title" >by Siba Prasad (Popnflex)</p>
            <div style={{ width: "50%", margin: "0px auto" }}>
              <Description
                title="Join Siba Prasad for a 5-day popping course. 
        Learn the fundamentals of body isolation, animation, and musicality. 
        Perfect for beginners and experienced dancers."
              />
            </div>
            <Button_component title="Price at" />
            <img src={reviews} className="my-3" />
            <br />
            <a href="#instructor_box"><img src={arrow_icon} className="my-3 arrow-icon" /></a>
            <div className="social-media">
               <h2></h2>
               <div className="social-icon ">
               <img src={social_icon_1} />
               <img src={social_icon_2} />
               <img src={social_icon_3} />
               <img src={social_icon_4} />
               <img src={social_icon_5} />
               </div>
            </div>
            <img src={Header_back} className="img-fluid"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero_Section;
