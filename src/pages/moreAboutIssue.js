import React from "react";
import { TextArea } from "../components/customerForm/form";
import Breadcrumbs from "../components/Navbar/breadcrumbs";
import { useLocation, useHistory } from "react-router-dom";
import "./pages.css";
const MoreAboutIssue = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <h1 className="title">Tell us more about issue</h1>
      <p className="subtitle">Tell us by typing</p>
      <Breadcrumbs path={location.pathname} />
      <div className="flex-column">
        <TextArea />
        <button
          style={{
            padding: "1rem",
            width: "15%",
            marginTop: "2rem",
            marginRight: "6rem",
            position: "absolute",
            left: "90%",
            bottom: -50,
            cursor: "pointer",
            border: "none",
            backgroundColor: "#fa314a",
            color: "white",
            borderRadius: 2,
          }}
          onClick={() => history.push("/device-info")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoreAboutIssue;
