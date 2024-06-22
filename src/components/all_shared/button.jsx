import React from 'react'

const Button_component = (props) => {
  return (
    <div className='dance-button-box' style={{
      
    }}>
        <input type="submit" value={props.title} className="dance-btn" 
        />
    </div>
  )
}

export default Button_component