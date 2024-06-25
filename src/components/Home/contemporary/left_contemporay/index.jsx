import React from "react";
import contemony_image from "../../../../assets/third-section.png";
import user_review from "../../../../assets/user-reviews.png";
import rating_data from "../../../../assets/Avatar group.png";
import Rating from "react-rating";
import Description from "../../../all_shared/description";

const Left_contemporay = (props) => {
  console.log("left", props.ratingdata);
  return (
    <div className="left_contemporay_container p-4">
      <img src={contemony_image} className="img-fluid" />
      <div className="d-flex justify-content-center mt-5">
        <img src={rating_data} height={50} className="mx-4" />
        <div>
          <Rating
            emptySymbol="fa fa-star-o fa-2x low"
            fullSymbol="fa fa-star fa-2x high"
            initialRating={props.ratingdata}
            readonly
          />
          <Description title="from 200+ reviews" />
        </div>
      </div>
    </div>
  );
};

export default Left_contemporay;
