import { useState } from "react";
import PropTypes from "prop-types";
import ImageStar from "../../assets/images/icon-star.svg";
import R from "./RatingCard.module.scss";

export default function RatingCard({ onSubmit }) {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSubmit = () => {
    if (selectedRating) {
      onSubmit(selectedRating);
    }
  };

  return (
    <div className={R.Card}>
      <div className={R.img}>
        <img src={ImageStar} alt="Ícone de estrela laranja" />
      </div>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={R.ratings}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            className={`rating-btn ${
              selectedRating === rating ? "selected" : ""
            }`}
            onClick={() => setSelectedRating(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <button className={R.submitBtn} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

RatingCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
