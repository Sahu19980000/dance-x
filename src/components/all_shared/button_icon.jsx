import React, { useContext } from 'react'
import icon_light from "../../assets/arrow-icon-dark.png"
import { ThemeContext } from '../Home/home'

const Button_icon_component = (props) => {
  const value = useContext(ThemeContext)
  return (
    <div className='dance-button-box' style={{
      
    }}>
        <button type="submit" className="dance-btn-icon rounded-3 " 
        style={{background:`${props.theme}`,WebkitBackgroundClip:`${props.cliptext}`,WebkitTextFillColor:`${props.textfillcolor}`}}
        >{props.title}
        <img src={icon_light} />
        </button>
    </div>
  )
}

export default Button_icon_component