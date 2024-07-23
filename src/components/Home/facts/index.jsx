import React from "react";
import Card_box from '../instructor/left-instructor/card_box'
import Heading from "../../all_shared/Heading";

const Facts = (props) => {
  console.log(props.feature_data);
  return (
    <div className="instructor_container " id="instructor_box">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Heading title="Facts & Figure" color="#f97738" textalign="center" />
          </div>
          <div className='col-lg-3 col-md-6 col-12 bg-primery'>
            <Card_box title="5000+" content="Students" />
           </div>
           <div className='col-lg-3 col-md-6 col-12 '>
           <Card_box title="450+" content="New style"/>
           </div>
           <div className='col-lg-3 col-md-6 col-12 '>
           <Card_box title="100+" content="Workshops"/>
           </div>
           <div className='col-lg-3 col-md-6 col-12 '>
           <Card_box title="100+" content="Workshops"/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
