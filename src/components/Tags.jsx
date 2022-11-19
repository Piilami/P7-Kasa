import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";

const Tags = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);

  return (
    <ul className="Tags-container">
      {logement.tags.map((tag, index) => (
        <li className="tag" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
