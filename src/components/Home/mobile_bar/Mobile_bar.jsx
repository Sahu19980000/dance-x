import React from "react";
import Button_component from "../../all_shared/button";

const Mobile_bar = (props) => {
  return (
    <div className="mobile-bar-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-sm-6">
            <div className="w-100 d-flex">
              <h5>₹999</h5>
              <h3>₹{props.price}</h3>
            </div>
            <div>
              <p>
                Offer ends on{" "}
                <span className="offer-time">23rd Aug, 12:00 AM</span>
              </p>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center col-sm-6 ">
             <Button_component title="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_bar;
