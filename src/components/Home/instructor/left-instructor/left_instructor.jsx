import React, { useContext, useEffect, useState } from 'react'
import List_data from './list_data'
import Card_box from './card_box'
import { ThemeContext } from '../../home'

const Left_instructor = (props) => {
  // const theme_data = useContext(ThemeContext);
  // const [course_data,Set_coursedata] = useState();

  useEffect(() => {
    // const test = theme_data[1].data;
    // Set_coursedata(test)
    // console.log(course_data);
    
  }, [])

  return (
    <div className='instructor-left-container'>
        <div className="container">
           <div className="row">
            <div className="col-lg-12">
              <h2 className='instructor-heading m-4 '>What you'll learn</h2>
            </div>
            <div>
              
            <List_data content={props.feature[0]} />
              <List_data content={props.feature[1]} />
              <List_data content={props.feature[2]} />
              <List_data content={props.feature[3]} />
              <List_data content={props.feature[4]} />
           </div>

           </div>
        </div>
    </div>
  )
}

export default Left_instructor