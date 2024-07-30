import React from 'react'
import zumba from "../../assets/zumba 1.png"
import './firstpage.css'

const Dance_card = (props) => {
  return (
    <div className='p-5'>
        <span className='d-flex align-items-center'>
        <img src={zumba} />
        <span className='dancer-card-title'>{props.title}</span>
        </span>
        
    </div>
  )
}

export default Dance_card