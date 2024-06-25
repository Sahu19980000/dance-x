// src/components/TestimonialCarousel.js
import "./testimonial.css"
import React from "react";
import testimonial_one from "../../../assets/testimonial/testimonial-one.png";
import testimonial_two from "../../../assets/testimonial/testimonial-two.png";
import testimonial_three from "../../../assets/testimonial/testimonial-three.png";
import testimonial_four from "../../../assets/testimonial/testimonial-four.png";
import playvideo from "../../../assets/play.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousel.css"; // Make sure to create this file for custom styles
import Sub_heading from "../../all_shared/sub_heading";
import Description from "../../all_shared/description";
import Heading from "../../all_shared/Heading";
import Button_icon_component from "../../all_shared/button_icon";

const testimonials = [
  {
    id: 1,
    name: "Rachael Schumm",
    year: "Mumbai - 2020",
    message: "Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.  Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.",
    image: `${testimonial_one}`,
    other_testimonial:[
       `${testimonial_two}`,
       `${testimonial_three}`,
       `${testimonial_four}`,
       `${testimonial_four}`
    ]
  },
  {
    id: 2,
    name: "Rohit Schumm",
    year: "2024",
    message: "Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.  Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.",
    image: `${testimonial_one}`,
    other_testimonial:[
      `${testimonial_two}`,
      `${testimonial_three}`,
      `${testimonial_four}`,
       `${testimonial_four}`
   ]
  },
  // Add more testimonials here
];

const TestimonialCarousel = (props) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="testimonial-carousel">
      <div className="container-fluid p-5">
      <Sub_heading title="TESTIMONIAL" />
        <Heading title="What our student says" color="#F8605E"/>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="row">
                <div className="col-lg-6 profile-section" >
                  <video controls className="responsive-iframe"  src={props.video} poster={testimonial.image}>
                  <img src={playvideo} className="play-video" alt="Play Video" />
                  </video>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial-content text-start">
                    <Sub_heading title={testimonial.name}/>
                   
                    <Description title={testimonial.year} />
                    <Description title={testimonial.message} />
                    <ul className="d-flex my-2 mx-0 " style={{listStyleType:'none' ,textAlign:"start"}}>
                    {testimonial.other_testimonial.map((item, index) => (
                     <li key={index} className="my-3">
                    <img src={item} className="m-2"/>
                     </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="col-lg-12">
                  <Button_icon_component title="View All"
                  theme='-webkit-linear-gradient(180deg, #F8605E 0%, #FA8C16)' 
                  cliptext="none " 
                  textfillcolor="none"
                  />
                </div>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

export default TestimonialCarousel;
