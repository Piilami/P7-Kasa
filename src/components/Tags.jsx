import React from "react";

const Tags = (props) => {
  return (
    <ul className="Tags-container">
      {props.location.tags.map((tag, index) => (
        <li className="tag" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
