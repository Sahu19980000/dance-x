import React from 'react'
import check from "../../../../assets/checkcircle.png"
import Description from '../../../all_shared/description'

const List_data = (props) => {

  return (
    <span className='m-0 d-flex'>
        <img src={check} width="25px" height="25px" /> &nbsp;&nbsp;
        <Description title={props.content} size="18px"/>
    </span>
  )
}

export default List_data