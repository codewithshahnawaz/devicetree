import React from "react";
import { TextArea } from "../components/customerForm/form";
import Breadcrumbs from "../components/Navbar/breadcrumbs";
import { useLocation } from "react-router-dom";
const MoreAboutIssue = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className="title">Tell us more about issue</h1>
      <p className="subtitle">Tell us by typing</p>
      <Breadcrumbs path={location.pathname} />
      <div className="home__section--cards-content">
        <TextArea />
      </div>
    </div>
  );
};

export default MoreAboutIssue;
