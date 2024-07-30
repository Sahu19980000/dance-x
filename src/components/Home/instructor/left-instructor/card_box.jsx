import React from 'react'

const Card_box = (props) => {
  return (
    <div className='card_box_data m-2 '> 
        <h2>
            {props.title}
        </h2>
        <p className='h3 '>
            {props.content}
        </p>
    </div>
  )
}

export default Card_box