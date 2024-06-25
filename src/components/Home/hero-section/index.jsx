import React, { useContext, useEffect, useState } from "react";
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
import Rating from "react-rating";
import 'font-awesome/css/font-awesome.min.css'; 



const Hero_Section = (props) => {
  
  // Set_coursedata(theme_data[1])
   console.log(props);

  return (
    <div className="dance-hero-section-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <Heading
              title={props.title}
              color="white"
              textalign="center"
            />
            <p className="sub-title" >{props.creatorname}</p>
            <div style={{ width: "75%", margin: "0px auto" }}>
              <Description
                title={props.para}
              />
            </div>
            <Button_component title="Price at" />
            <img src={reviews} className="my-3" />
            <Rating
            stop={5}
            initialRating={4.2}
          emptySymbol="fa fa-star-o fa-2x"
         fullSymbol="fa fa-star fa-2x"
         readonly
/>
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
