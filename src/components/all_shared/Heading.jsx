import React from 'react'

const Heading = (props) => {
  return (
    <div className='dance-heading-box '>
        <h3 className='dance-headings ' style={{color:`${props.color}`,
        textAlign:`${props.textalign}`,
        fontSize:`${props.size}`
      
        }}>{props.title}
        </h3>
    </div>
  )
}

export default Heading