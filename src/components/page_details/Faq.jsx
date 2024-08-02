import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Description from "../all_shared/description";
import Heading from "../all_shared/Heading";
import Accordion from "react-bootstrap/Accordion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image_card_one from "../../assets/Card 2.png";
import image_card_two from "../../assets/Card 3.png";


const Faq = () => {
  const [show, setShow] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setVideoUrl(url);
    setShow(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="faq-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Description title="VIDEO" align="center" />
            <Heading title="Testimonial" />
            <Slider {...settings}>
              <div className="m-4">
                <img
                  src={image_card_one}
                  alt="Video Thumbnail"
                  className="img-thumbnail m-2"
                  onClick={() => handleShow("video_url1.mp4")}
                />
              </div>
              <div className="m-4">
                <img
                  src={image_card_two}
                  alt="Video Thumbnail"
                  className="img-thumbnail m-2"
                  onClick={() => handleShow("video_url2.mp4")}
                />
              </div>
              <div className="m-4">
                <img
                  src={image_card_one}
                  alt="Video Thumbnail"
                  className="img-thumbnail m-2"
                  onClick={() => handleShow("video_url3.mp4")}
                />
              </div>
            </Slider>
          </div>
          <div className="col-12">
            <Description title="FAQ" align="center" />
            <Heading title="Faq" />
          </div>
          <div className="faq-section py-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="mb-3">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="mb-3">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Video Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <video controls width="100%">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Faq;
