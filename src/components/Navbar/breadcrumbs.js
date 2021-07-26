import React from "react";
import "./style.css";
const Breadcrumbs = (props) => {
  if (props.path === "/") {
    return null;
  }
  return (
    <div>
      <div className="breadcrumbs" style={{fontWeight:"light"}}>{`(Laptop)`}</div>
    </div>
  );
};

export default Breadcrumbs;
