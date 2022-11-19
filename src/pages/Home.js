import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="content-container">
      <main>
        <Banner />
        <Card />
      </main>
    </div>
  );
};

export default Home;
