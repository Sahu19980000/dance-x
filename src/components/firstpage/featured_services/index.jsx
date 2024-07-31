import React from 'react'
import Description from '../../all_shared/description'
import Heading from '../../all_shared/Heading'
import Course_card from '../course_card/course'

const FeaturedServices = () => {
  return (
    <div className='featured_services_container'>
       <div className="container-fluid">
         <div className="row">
            <div className="col-12">
            <Description title="FEATURED" align="center"/>
            <Heading title="Featured Services" />
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
    </div>
  )
}

export default FeaturedServices