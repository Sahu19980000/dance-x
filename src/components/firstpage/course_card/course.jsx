import React from 'react'
import course_img from "../../../assets/course-img.png"
import star from "../../../assets/star.png"
import Description from '../../all_shared/description'

const Course_card = () => {
  return (
    <div className='course_card py-2 my-2'>
        <div>
          <img src={course_img} className='img-fluid'/>
        </div>
        <div>
          <h6 className='course-heading py-3'>Hip-hop freestyle popping</h6>
          <Description title="Lorem ipsum dolor sit amet, consectetur" size="15px"/>
          <span className='d-flex justify-content-between'>
            <small className='text-white fs-5'>Rs 999</small>
            <div>
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            </div>
          </span>
        </div>
    </div>
  )
}

export default Course_card