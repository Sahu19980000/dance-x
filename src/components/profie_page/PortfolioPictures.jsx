import React from 'react';
import pick_two from "../../assets/pickup-two.png"
import Sub_heading from '../all_shared/sub_heading'
import page_details_one from "../../assets/page_details_one.png"
import Heading from '../all_shared/Heading';

const PortfolioPictures = () => {
  return (
    <div className="container portfolio-pictures">
      <Heading title="Portfolio Pictures" />
      <div className="row">
      <div className="col-md-6">
              <img src={page_details_one} className='img-fluid'/>
            </div>

            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                    <div className="col-md-6 my-2">
                    <img src={pick_two} className='img-fluid freestyle-cards'/>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default PortfolioPictures;
