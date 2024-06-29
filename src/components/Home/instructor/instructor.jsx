import React from 'react'
import Sub_heading from '../../all_shared/sub_heading'
import Heading from '../../all_shared/Heading'
import Right_instructor from './right-instructor/right-instructor'
import Left_instructor from './left-instructor/left_instructor'

const Instructor = (props) => {
  console.log(props.feature_data);
  return (
    <div className="instructor_container " id="instructor_box">
        <div className="container">
            <div className="row">

            <video controls className="responsive-iframe my-5" src={props.video} >
                  
            </video>

                <div className='section-title text-center'>
                    <Sub_heading title="Instructor"/> 
                    <Heading title={props.creatorname} color="#f97738"/>   
                </div>
                <div className="col-lg-6">
                   <Left_instructor feature={props.feature_data} />
                </div>
                <div className="col-lg-6">
                   <Right_instructor />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instructor