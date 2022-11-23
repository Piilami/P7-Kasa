import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="content-container">
      <main>
        <div className="Banner-container">
          <p className="Banner-txt">Chez vous, partout et ailleurs</p>
        </div>
        <Card />
      </main>
    </div>
  );
};

export default Home;
