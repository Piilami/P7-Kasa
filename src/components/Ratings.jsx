import React from "react";

const Ratings = (props) => {
  const rateLogement = props.location.rating;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating-container">
      {stars.map((star) =>
        rateLogement >= star ? (
          <img
            key={star}
            className="rate-stars"
            src="/img/fullStar.svg"
            alt="full star"
          />
        ) : (
          <img
            key={star}
            className="rate-stars"
            src="/img/emptyStar.svg"
            alt="emptyStar"
          />
        )
      )}
    </div>
  );
};

export default Ratings;
