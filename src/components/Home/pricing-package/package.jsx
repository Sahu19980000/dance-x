import React from "react";
import Button_icon_component from "../../all_shared/button_icon";
import FeaturesList from "./FeaturesList"; // New component to display features list

const Package_component = (props) => {
    // console.log(props.features);
  return (
    <div className="package_container my-4">
      <div className="icon-box">
        <img src={props.circle_img} className="my-3" />
        <div className="my-3">
          <span className="text-white">
            {props.title} <br />
            {props.content}
          </span>
          <h1 className="text-white fs-2"><b>{props.discountprice}</b></h1>
          <h3 className="text-white" style={{textDecoration:"line-through"}}>{props.price}</h3>
        </div>
        
        <Button_icon_component title="Get Started" 
        theme={props.theme} 
        cliptext={props.cliptext}
        textfillcolor={props.textfillcolor}
        />
        <div className="package-border">
          <h2></h2>
        </div>
      </div>

      <FeaturesList features={props.features} /> {/* Pass features to FeaturesList component */}
    </div>
  );
};

export default Package_component;
