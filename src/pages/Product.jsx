import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Collapse from "../components/Collapse";
import Caroussel from "../components/Caroussel";
import Tags from "../components/Tags";
import Ratings from "../components/Ratings";

// fetch + Carte
const Product = () => {
  const { id } = useParams();
  const [location, setLocation] = useState();

  useEffect(() => {
    function fetchApi() {
      fetch("logements.json")
        .then((res) => res.json())
        .then((data) => {
          const logement = data.find((p) => p.id === id);
          setLocation(logement);
          console.log(logement);
        })
        .catch((error) => {
          console.log(error);
          return <Error />;
        });
    }
    fetchApi();
  }, [id]);
  if (!location) {
    return <Error />;
  }

  return (
    <div className="content-container">
      <main className="main-product">
        <Caroussel location={location} />

        <div className="allInfo">
          <div className="location-info">
            <h2 className="title-product">{location.title}</h2>
            <h3 className="location-product">{location.location}</h3>
            <Tags location={location} />
          </div>
          <div className="location-sub-info">
            <div className="host">
              <p className="host-name">{location.host.name}</p>
              <img
                src={location.host.picture}
                alt="Host"
                className="host-pic"
              />
            </div>

            <Ratings location={location} />
          </div>
        </div>
        <div className="rating"></div>
        <div className="container-collapse">
          <Collapse
            locCollapse="collapse-loc"
            locCollapseMenu="text-menu-loc"
            title="Description"
            content={location.description}
          />
          <Collapse
            locCollapse="collapse-loc"
            locCollapseMenu="text-menu-loc"
            title="Equipements"
            content={location.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          />
        </div>
      </main>
    </div>
  );
};

export default Product;
