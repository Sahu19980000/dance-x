import React from "react";
import bground from "../../../../assets/bg-round.png";
import profile from "../../../../assets/profile.png";
import circle_one from "../../../../assets/Ellipse 5.png";
import circle_two from "../../../../assets/Ellipse 6.png";
import "./circle.css";

const Right_instructor = () => {
  return (
    <div className="right-instructor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <img src={profile} class="profile-bar" />
              <div class="circle-two">
                <a href="#">
                  <div class="circle-arround-two-1 anima">
                    <img src={circle_one} class="circle-icon" />
                  </div>
                </a>
                <a href="#">
                  <div class="circle-arround-two-2 anima">
                    <img src={circle_two} class="circle-icon" />
                  </div>
                </a>
                <a href="#">
                  <div class="circle-arround-two-3 anima">
                    <img src={circle_one} class="circle-icon" />
                  </div>
                </a>
                <a href="#">
                  <div class="circle-arround-two-4 anima">
                    <img src={circle_two} class="circle-icon" />
                  </div>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right_instructor;
