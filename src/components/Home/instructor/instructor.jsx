import React from 'react'
import Sub_heading from '../../all_shared/sub_heading'
import Heading from '../../all_shared/Heading'
import Right_instructor from './right-instructor/right-instructor'
import Left_instructor from './left-instructor/left_instructor'
import logo from "../../../assets/dance-x-logo.png";
import Header_back from "../../../assets/header back.png";
import arrow_icon from "../../../assets/arrow-icon.png";

const Instructor = (props) => {
  console.log(props.feature_data);
  return (
    <div className="instructor_container " id="instructor_box">
        <div className="container">
            <div className="row">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
                {/* <div className='section-title text-center'>
                    <Sub_heading title="Course By"/> 
                    <Heading title={props.creatorname} color="#f97738"/>   
                </div> */}
                <div className="col-lg-6">
                   <Left_instructor feature={props.feature_data} />
                </div>
                <div className="col-lg-6">
                   <Right_instructor />
                </div>
            </div>
            <div className="col-12 text-center">
            <a href="#hero-section" className='text-center'>
              <img src={arrow_icon} className="my-3 arrow-icon" />
            </a>
            </div>
           
        </div>
    </div>
  )
}

export default Instructor