import React from "react";
import logo from "../../../assets/dance-x-logo.png";
import Headertabs from "./tabs";
import profile_icon from "../../../assets/profile-icon.png";
import mobile_bar from "../../../assets/Vector.png";
import Dropdown from "react-bootstrap/Dropdown";

const Header_components = () => {
  return (
    <div className="dance-xheader">
      <div className="container-fluid">
        <div className="row py-4 align-items-center">
          <div className="col-md-2 col-4">
            <img src={logo} className="img-fluid" height="50" width="150" />
          </div>
          <div className="col-md-7 col-8 d-flex justify-content-center">
            <Headertabs />
          </div>
          <div className="col-md-3 col-12 py-4 d-flex justify-content-between align-items-center">
            <div className="profile-container d-flex align-items-center">
              <img
                src={profile_icon}
                height={50}
                width={50}
                className="profile-icon"
              />
              <div className="ml-2 profile-text">
                <p
                  className="mb-0"
                  style={{ whiteSpace: "nowrap", color: "#fff" }}
                >
                  Murliyar Rahman
                </p>
                <p
                  className="mb-0"
                  style={{ whiteSpace: "nowrap", color: "#fff" }}
                >
                  user@example.com
                </p>
              </div>
            </div>
            <div className="ml-4">
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <img src={mobile_bar} className="mobile-bar-icon" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Signup
                  </Dropdown.Item>
                 
                </Dropdown.Menu>
              </Dropdown>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12 d-flex justify-content-center">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search Your Style"
                className="form-control"
              />
              <button className="search-button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_components;
