import React from "react";
import profile_icon_1 from "../../assets/profile-icon-1.png";
import profile_icon_2 from "../../assets/profile-icon-2.png";
import profile_icon_3 from "../../assets/profile-icon-3.png";
import profile from "../../assets/profile.png";
import Heading from "../all_shared/Heading";
import Description from "../all_shared/description";
import Slider from "react-slick";
import ServicesCard from "./services_card";

const ProfileDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="profile-details">
      <div className="row ">
        <div className="col-md-6">
          <img
            src={profile}
            className="rounded-circle img-fluid profile-header-details"
            alt="Profile"
          />
          <Description title="musfiqur@gmail.com" size="18px" />
        </div>
        <div className="col-md-6 py-5">
          <div className="profile-stats d-flex align-items-center">
            <span>
              <img
                src={profile_icon_1}
                className="img-fluid"
                width="35"
                height="35"
              />
              <Heading title="Reviews: 68" color="#000" size="18px" />
            </span>

            <span>
              <img
                src={profile_icon_2}
                className="img-fluid"
                width="35"
                height="35"
              />
              <Heading title="Likes: 07" color="#000" size="18px" />
            </span>
            <span>
              <img
                src={profile_icon_3}
                className="img-fluid"
            width="35"
                 height="35"
              />
              <Heading title="Rating: 06" color="#000" size="18px" />
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
          <Description
            title="Lorem Ipsum is simply dummy printing."
            size="21px"
          />
        </div>
        <div className="col-md-4">
          <Heading title="Dance Forms:" size="28px" />
          <Description title="Hip Hop, Lorem Ipsum, Lorem Ipsum" size="21px" />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="services_container">
            <Description title="SKILLS" align="center" />
            <Heading title="Skills" />
            <Slider {...settings}>
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />

          </Slider>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
