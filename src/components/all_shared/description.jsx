import React from 'react'

const Description = (props) => {
  return (
    <div className='description-box' >
       <p className='description-text' style={{
        fontSize:`${props.size}`, 
         textAlign:`${props.align}`,
         fontStyle:`${props.style}`,
         color:`${props.color}`
         }}>{props.title}</p>
    </div>
  )
}

export default Description;
