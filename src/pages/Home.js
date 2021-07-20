import React from "react";
import Card from "../components/cards/Cards";
import Breadcrumbs from "../components/Navbar/breadcrumbs";
import { useLocation } from "react-router-dom";
import "./pages.css";
const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className="title">Device Type</h1>
      <Breadcrumbs path={location.pathname} />
      
      <div className="home__section--cards">
        <Card
          define="Laptop"
          icon={window.location.origin + "/laptop.svg"}
          redirect="/issue-type"
        />
        <Card
          define="Desktop"
          icon={window.location.origin + "/computer.svg"}
          redirect="/issue-type"
        />
      </div>
    </div>
  );
};

export default Home;
