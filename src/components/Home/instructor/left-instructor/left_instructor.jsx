import React from 'react'
import List_data from './list_data'
import Card_box from './card_box'

const Left_instructor = () => {
  return (
    <div className='instructor-left-container'>
        <div className="container">
           <div className="row">
            <div className="col-lg-12">
              <h2 className='instructor-heading m-4 '>What you'll learn</h2>
            </div>
            <div>

            <List_data content="Learn technical & stylistic elements of popping."/>
              <List_data content="Control movements & transitions between styles."/>
              <List_data content="Create & perform popping combinations with personal style."/>
              <List_data content="Develop performance skills & stage presence."/>
              <List_data content="Boost confidence expressing oneself through popping." />
           </div>

           <div className='col-lg-4'>
            <Card_box title="5000+" content="Students"/>
           </div>
           <div className='col-lg-4'>
           <Card_box title="450+" content="New style"/>
           </div>
           <div className='col-lg-4'>
           <Card_box title="100+" content="Workshops"/>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Left_instructor