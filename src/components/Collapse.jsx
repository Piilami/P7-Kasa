import React, { useState } from "react";

const Collapse = (props) => {
  const [clicked, isClicked] = useState(false);
  const [rotate, setRotate] = useState("close");

  function clickChev() {
    isClicked(clicked === false ? true : false);
    setRotate(rotate === "close" ? "open" : "close");
  }

  return (
    <div className={`menu-container ${props.locCollapse}`}>
      <div className="header-menu-container">
        <h3 className="title-menu">{props.title}</h3>
        <button
          className={`Collapse-Btn ${rotate}`}
          onClick={(e) => clickChev()}
          type="image"
        >
          <svg
            width="24"
            height="15"
            viewBox="0 0 24 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {clicked && (
        <p className={`text-menu ${props.locCollapseMenu}`}>{props.content}</p>
      )}
    </div>
  );
};

export default Collapse;
