import React from "react";
import Slider from "react-slick";
import ServicesCard from "./services";
import Description from "../../all_shared/description";
import Heading from "../../all_shared/Heading";

const Services_component = () => {
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
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="services_container">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Description title="MIGHT LINK" align="center" />
            <Heading title="Services You Might Link" />
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </Slider>
    </div>
  );
};

export default Services_component;
