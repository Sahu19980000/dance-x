import React from 'react'
import Left_contemporay from './left_contemporay'
import Right_contenmporay from './right_contemporay'

const Contenmporay = () => {
  return (
    <div className='contenmporay_container'>
       <div className="container">
       <div className='contenmpory_box'>
        <div className="row">
          <div className="col-lg-6">
               <Left_contemporay />
            </div>
            <div className="col-lg-6">
               <Right_contenmporay />
            </div>
          </div>
           
        </div>
       </div>
    </div>
  )
}

export default Contenmporay