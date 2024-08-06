import React from 'react';
import Services_img from "../../assets/Services_one.png";
import Description from '../all_shared/description';

const ServicesCard = () => {
  return (
    <div className='services_cards_profile m-2'>
      <img src={Services_img} alt="Service" className='' />
      <div className="services_info">
        <Description title="Personal Training popping" />
      </div>
    </div>
  );
};

export default ServicesCard;
