import React from 'react'

const Sub_heading = (props) => {
  return (
    <div>
        <h4 className='sub-heading'
        style={{color:`${props.color}`}}
        >{props.title}</h4>
    </div>
  )
}

export default Sub_heading