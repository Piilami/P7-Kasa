import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";

const Caroussel = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);
  const imgLogement = logement.pictures;
  const [currentImg, setCurrentImg] = useState(0);

  function nextImg() {
    setCurrentImg(currentImg === imgLogement.length - 1 ? 0 : currentImg + 1);
  }
  function prevImg() {
    setCurrentImg(currentImg === 0 ? imgLogement.length - 1 : currentImg - 1);
  }

  return (
    <div className="caroussel-container">
      {imgLogement.length > 1 && (
        <button className="next-Btn" onClick={nextImg} type="image">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {imgLogement.length > 1 && (
        <button className="prev-Btn" onClick={prevImg} type="image">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {imgLogement.length > 1 && (
        <span className="currImg">
          {currentImg + 1}/{imgLogement.length}
        </span>
      )}
      <img className="img-caroussel" src={imgLogement[currentImg]} alt="" />
    </div>
  );
};

export default Caroussel;
