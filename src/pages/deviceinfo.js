import React from "react";
import "./form.css";
import { useHistory } from "react-router-dom";
const Deviceinfo = () => {
  const history = useHistory();
  return (
    <div>
      <div className="form">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 200 }}>
          Device Information
        </h2>
        <input type="text" placeholder="Brand" />
        <input type="text" placeholder="Model" />
        <input type="text" placeholder="Processor" />
        <input type="text" placeholder="Graphic Card" />
        <button onClick={() => history.replace("/customer-info")}>Next</button>
      </div>
    </div>
  );
};

export default Deviceinfo;
