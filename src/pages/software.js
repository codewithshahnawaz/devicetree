import React from "react";
import Card from "../components/cards/Cards";
import Breadcrumbs from "../components/Navbar/breadcrumbs";
import { useLocation } from "react-router-dom";
const Software = () => {
  const redirect = "/issue-type-more";
  const location = useLocation();
  return (
    <div>
      <h1 className="title">Software</h1>
      <Breadcrumbs path={location.pathname} />
      <div className="home__section--cards-content">
        <Card define="Reboot" redirect={redirect} h1 icon="https://img.icons8.com/ios/100/fa314a/reboot.png"/>
        <Card define="Antivirus" redirect={redirect} h1 icon="https://img.icons8.com/ios/100/fa314a/antivirus-scanner.png"/>
        <Card define="Disc space" redirect={redirect} h1  icon="https://img.icons8.com/ios/100/fa314a/save-all.png"/>
        <Card define="Other software" redirect={redirect} h1 icon="https://img.icons8.com/ios/100/fa314a/window-other.png"/>
      </div>
    </div>
  );
};

export default Software;
