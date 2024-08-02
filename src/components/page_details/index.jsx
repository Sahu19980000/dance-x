import React from 'react'
import Heading from '../all_shared/Heading'
import Button_component from '../all_shared/button'
import pick_one from "../../assets/pickup-one.png"
import pick_two from "../../assets/pickup-two.png"
import Sub_heading from '../all_shared/sub_heading'
import page_details_one from "../../assets/page_details_one.png"
import DanceProfile from './second_section'
import './page_details.css';
import CustomerReviews from './CustomerReviews'
import Faq from './Faq'


const Page_details = () => {
  return (
    <div className='page_details_container'>
       <div className="container">
         <div className="row">
            
            <div className="col-6 py-4">
                <Sub_heading title="Freestyle popping 3BR w/ incredible views" color="#fff"/>
            </div>

            <div className="col-6 py-4 text-end">
              <Button_component title="View All"/>  
            </div>

            <div className="col-md-6">
              <img src={page_details_one} className='img-fluid'/>
            </div>

            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                </div>
            </div>
            <div className="col-12">
              <DanceProfile />
            </div>
            <div className="col-12">
              <CustomerReviews />
            </div>
            <div className="col-12">
              <Faq />
            </div>
         </div>
       </div>
    </div>
  )
}

export default Page_details