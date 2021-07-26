import React from "react";
import './form.css'

const Deviceinfo = () => {
  return (
    <div>
      <h1>Device</h1>
      <div className="form">
        <input  type="text" placeholder="Brand"/>
        <input type="text" placeholder="Model"/>
        <input type="text" placeholder="Processor"/>
        <input type="text" placeholder="Graphic Card"/>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Deviceinfo;
