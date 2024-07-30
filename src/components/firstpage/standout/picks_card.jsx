import React from 'react'
import pick_one from "../../../assets/pickup-one.png"
import pick_two from "../../../assets/pickup-two.png"
import Description from '../../all_shared/description'

const PicksCard = () => {
  return (
    <div className='pickcard_container'>
       <img src={pick_one} className='img-fluid pick_card-img'/>
       <Description title="Our Top pick for Zumba Services" size="15px" align="center"/>
    </div>
  )
}

export default PicksCard