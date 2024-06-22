import React from 'react'
import contemony_image from "../../../../assets/third-section.png"
import user_review from "../../../../assets/user-reviews.png"

const Left_contemporay = () => {
  return (
    <div className='left_contemporay_container p-4'>
       <img src={contemony_image} className='img-fluid'/>
       <img src={user_review} className='img-fluid'/>
    </div>
  )
}

export default Left_contemporay