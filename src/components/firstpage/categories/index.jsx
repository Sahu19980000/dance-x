import React from 'react'
import Description from '../../all_shared/description'
import Heading from '../../all_shared/Heading'
import Button_component from '../../all_shared/button'

const Browse_categories = () => {
  return (
    <div className='categories_container'>
      <div className="container-fluid">
        <div className="row">
        <Description title="CATEGORIES" align="center"/>
         <Heading title="Browse Categories" />
            <div className="col-md-3">
               <div className="categories_card_one">
                   <Description title="Classical" />
               </div>
            </div>
            <div className="col-md-3">
            <div className="categories_card_two">
            <Description title="Modern Dance" />
                </div>
            </div>
            <div className="col-md-3">
            <div className="categories_card_three">
            <Description title="Hip Hop" />
              </div>
            </div>
            <div className="col-md-3">
            <div className="categories_card_four">
            <Description title="Contemporary" />
            </div>
            </div>
            <div className="col-12 py-4 text-center">
            <Button_component title="View All" />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Browse_categories