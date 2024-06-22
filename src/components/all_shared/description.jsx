import React from 'react'

const Description = (props) => {
  return (
    <div className='description-box'>
       <p className='description-text' style={{textAlign:`${props.align}`,fontStyle:`${props.style}`}}>{props.title}</p>
    </div>
  )
}

export default Description;
