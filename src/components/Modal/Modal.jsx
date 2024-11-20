import PropTypes from "prop-types";
import ImageModal from "../../assets/images/illustration-thank-you.svg";
import "./Modal.scss";

export default function Modal({ rating }) {
  return (
    <div className="card-modal">
      <div className="img">
        <img src={ImageModal} alt="" />
      </div>

      <span className="result">You selected {rating} out of 5</span>

      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

Modal.propTypes = {
  rating: PropTypes.number,
};

Modal.defaultProps = {
  rating: 0,
};
