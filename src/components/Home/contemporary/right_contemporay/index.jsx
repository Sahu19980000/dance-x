import React from 'react'
import Heading from '../../../all_shared/Heading'
import Description from '../../../all_shared/description'
import Counter from '../counter'
import Button_component from '../../../all_shared/button'
import clipboard from "../../../../assets/clipboard.png"
import Button_icon_component from '../../../all_shared/button_icon'

const Right_contenmporay = () => {

    const copyToClipboard = ()=>{
        navigator.clipboard.writeText('CO5015');
        alert('copied');
    }
  return (
    <div className='right_contenmporay_container'>
       <Heading title="Contemporary" color="#f97738" textalign="start" />
       <Description title="15 Days course   |   Ondemand   |   Live Included" align="start" style="italic"/>
       <Description title="Enjoy Flat 50% off on this course" align="start" style="italic"/>
       <p className='text-white my-3'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
       <Counter />
       <div className='d-flex '>
       <Button_icon_component title="Know More "
       cliptext="none"
       textfillcolor="none"
       theme="-webkit-linear-gradient(180deg, #F8605E 0%, #FA8C16)"
       />
       <span className='coupon-apply-dance m-2 '>
        <p className='text-white fs-6'>Coupon Code : CO5015 <img src={clipboard} onClick={copyToClipboard}/></p>
        <p className='text-white'>Offer valid till limited time</p>
       </span>
       </div>
       
    </div>
  )
}

export default Right_contenmporay