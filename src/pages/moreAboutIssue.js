import React from "react";
import { TextArea } from "../components/customerForm/form";
const MoreAboutIssue = () => {
  return (
    <div>
      <h1 className="title">Tell us more about issue</h1>
      <p className="subtitle">Tell us by typing</p>
      <div className="home__section--cards-content">
        <TextArea />
      </div>
    </div>
  );
};

export default MoreAboutIssue;
