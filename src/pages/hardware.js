import React from "react";
import Card from "../components/cards/Cards";

const Hardware = () => {
  const redirect = "/issue-type-more";
  return (
    <div>
      <h1 className="title">Hardware</h1>
      <div className="home__section--cards-content">
        <Card define="Screen" redirect={redirect} h1 />
        <Card define="Battery" redirect={redirect} h1 />
        <Card define="Memory" redirect={redirect} h1 />
        <Card define="Speaker" redirect={redirect} h1 />
      </div>
    </div>
  );
};

export default Hardware;
