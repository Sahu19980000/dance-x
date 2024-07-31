import React from 'react';
import Services_img from "../../../assets/Services_one.png";
import Description from '../../all_shared/description';

const ServicesCard = () => {
  return (
    <div className='services_cards'>
      <img src={Services_img} alt="Service" className='service_image' />
      <div className="services_info">
        <Description title="Personal Training popping" />
        <Description title="Personal Choreography" />
      </div>
    </div>
  );
};

export default ServicesCard;
