import React from "react";
import Breadcrumbs from "../components/Navbar/breadcrumbs";
import { useLocation } from "react-router-dom";
import Card from "../components/cards/Cards";

const Hardware = () => {
  const redirect = "/issue-type-more";
  const location = useLocation();
  return (
    <div>
      <h1 className="title">Hardware</h1>
      <Breadcrumbs path={location.pathname} />
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
