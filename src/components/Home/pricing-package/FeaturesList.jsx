import React from 'react';
import check from "../../../assets/tick.png"

const FeaturesList = ({ features }) => {
  return (
    <ul className="features-list" style={{listStyle:"none"}}>
      {features.map((feature, index) => (
        <li key={index} className="feature-item text-white my-2">
          <img src={check} />&nbsp;&nbsp;
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
