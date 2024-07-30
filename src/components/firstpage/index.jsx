import React from 'react';
import Dance_card from './dance_card';
import Slider from 'react-slick';
import All_course from './course_card';
import StandoutSection from './standout';

const Firstpage = () => {
    const settings = {
        dots: false, // Ensure this is set to false
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
        <div className="firstpage_container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="dance-card">
                            <Slider {...settings}>
                                <Dance_card title="Zaumba" />
                                <Dance_card title="Zaumba" />
                                <Dance_card title="Zaumba" />
                                <Dance_card title="Zaumba" />
                                <Dance_card title="Zaumba" />
                                <Dance_card title="Zaumba" />
                                <Dance_card title="Zaumba" />
                            </Slider>
                        </div>
                        <All_course />
                        <StandoutSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Firstpage;
