import React from 'react'
import Course_card from './course'

const All_course = () => {
  return (
    <div className='course_container'>
        <div className="row">
            <div className="col-md-3">
            <Course_card />
            </div>
            <div className="col-md-3">
            <Course_card />
            </div>
            <div className="col-md-3">
            <Course_card />
            </div>
            <div className="col-md-3">
            <Course_card />
            </div>
            <div className="col-md-3">
            <Course_card />
            </div>
            <div className="col-md-3">
            <Course_card />
            </div>
            <div className="col-md-3">
            <Course_card />
            </div>
            <div className="col-md-3">
            <Course_card />
            </div>
        </div>
       
    </div>
  )
}

export default All_course