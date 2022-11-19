import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";

const Ratings = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);
  const rateLogement = logement.rating;
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
