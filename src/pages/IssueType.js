import React from "react";
import Card from "../components/cards/Cards";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Navbar/breadcrumbs";
const IssueType = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className="title">Issue Type</h1>
      <Breadcrumbs path={location.pathname} />
      <div className="home__section--cards">
        <Card define="Hardware" redirect="/issue-type-hardware" h1 icon={window.location.origin + "/harddrive.svg"} />
        <Card define="Software" redirect="/issue-type-software" h1 icon="https://img.icons8.com/ios/100/fa314a/plugin.png" />
      </div>
    </div>
  );
};

export default IssueType;
