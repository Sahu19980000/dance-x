import React from 'react'

const Heading = (props) => {
  return (
    <div className='dance-heading-box '>
        <h2 className='dance-headings' style={{color:`${props.color}`,textAlign:`${props.textalign}`}}>{props.title}
        </h2>
    </div>
  )
}

export default Heading