import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Description from "../all_shared/description";
import Heading from "../all_shared/Heading";
import reviews from "../../assets/reviews.png";
import star from "../../assets/star.png";
import testimonial from "../../assets/testimoial.png";
import Sub_heading from "../all_shared/sub_heading";

const CustomerReviews = () => {
  
    const [show, setShow] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (url) => {
      setVideoUrl(url);
      setShow(true);
    };
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="container customer-reviews">
      <div className="row">
        <div className="col-12 text-center">
          <Description title="STORY" />
          <Heading title="Customer success story" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Slider {...settings}>
            <div className="p-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <img
                      src={reviews}
                      alt=""
                      className="rounded-circle img-fluid"
                      width="18px"
                      height="18px"
                    />
                    <div className="d-flex">
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                    </div>
                  </div>
                  <h5 className="card-title">Floyd Miles</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <img
                      src={reviews}
                      alt=""
                      className="rounded-circle img-fluid"
                      width="18px"
                      height="18px"
                    />
                    <div className="d-flex">
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                    </div>
                  </div>
                  <h5 className="card-title">Floyd Miles</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <img
                      src={reviews}
                      alt=""
                      className="rounded-circle img-fluid"
                      width="18px"
                      height="18px"
                    />
                    <div className="d-flex">
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                    </div>
                  </div>
                  <h5 className="card-title">Floyd Miles</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <img
                      src={reviews}
                      alt=""
                      className="rounded-circle img-fluid"
                      width="18px"
                      height="18px"
                    />
                    <div className="d-flex">
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                    </div>
                  </div>
                  <h5 className="card-title">Floyd Miles</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <img
                      src={reviews}
                      alt=""
                      className="rounded-circle img-fluid"
                      width="18px"
                      height="18px"
                    />
                    <div className="d-flex">
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                      <img src={star} width="15px" height="15px" />
                    </div>
                  </div>
                  <h5 className="card-title">Floyd Miles</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <Description title="RATING" />
          <Heading title="Reviews" />
        </div>
      </div>
      <div className="row mt-3 ">
        <div className="col-md-4 text-center p-4">
          <h1 className="" style={{ fontSize: "85px", fontWeight: "bold" }}>
            4.5
          </h1>
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <Description title="2,256,896" />
        </div>
        <div className="col-md-8 text-center p-4">
          <div className="rating-bar">
            <div className="d-flex justify-content-between">
              <span>5</span>
              <div className="progress flex-grow-1 mx-2">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>4</span>
              <div className="progress flex-grow-1 mx-2">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>3</span>
              <div className="progress flex-grow-1 mx-2">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>2</span>
              <div className="progress flex-grow-1 mx-2">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>1</span>
              <div className="progress flex-grow-1 mx-2">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="testimonial_cards  ">
            <img src={testimonial} className="my-2 img-fluid" />
            <Sub_heading title="himanshu sahu" />
            <span>
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum modi vel officia quam blanditiis. Ullam, molestiae amet! Doloremque distinctio cum accusamus saepe? Aperiam deleniti nisi ipsum itaque architecto quasi aliquid.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial_cards  ">
            <img src={testimonial} className="my-2 img-fluid" />
            <Sub_heading title="himanshu sahu" />
            <span>
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum modi vel officia quam blanditiis. Ullam, molestiae amet! Doloremque distinctio cum accusamus saepe? Aperiam deleniti nisi ipsum itaque architecto quasi aliquid.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial_cards  ">
            <img src={testimonial} className="my-2 img-fluid" />
            <Sub_heading title="himanshu sahu" />
            <span>
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum modi vel officia quam blanditiis. Ullam, molestiae amet! Doloremque distinctio cum accusamus saepe? Aperiam deleniti nisi ipsum itaque architecto quasi aliquid.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
