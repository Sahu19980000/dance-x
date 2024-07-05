import React from "react";
import Description from "../../all_shared/description";
import Heading from "../../all_shared/Heading";
import Button_icon_component from "../../all_shared/button_icon";

const ContactForm = () => {
  return (
    <div className="contact-form-container d-flex flex-column">
      <div className="container ">
        <Description title="Don't waste time" />
        <Heading title="Let's talk to an Expert" color="#f97738" />
        <div className="row">
          <div className="col-lg-12">
            <div className="form-content">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your good name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Harvey Spectar"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Provide your email for updates</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">
                    Stay in Step! Enter Your Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    placeholder="Enter your contact number"
                  />
                </div>
                <Button_icon_component  
                title="Talk to Us" 
                theme='-webkit-linear-gradient(180deg, #F8605E 0%, #FA8C16)' 
                cliptext="none !important" 
                textfillcolor="none !important"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
