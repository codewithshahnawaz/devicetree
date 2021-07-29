import React from "react";
import { useHistory } from "react-router-dom";
const Customerinfo = () => {
  const history = useHistory();
  return (
    <div>
      <div className="form">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 200 }}>
          Customer Information
        </h2>
        <form className="inner_form">
          <input type="text" placeholder="Name" />
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Phone"
          />
          <input type="email" placeholder="E-mail" />
          {/* <input type="text" placeholder="Address" /> */}
          <textarea
            style={{ width: "75%", height: "25%" }}
            placeholder="Address"
            maxLength="125"
            resizable="off"
          ></textarea>
        </form>
        <button onClick={() => history.push("/review-info")}>Next</button>
      </div>
    </div>
  );
};

export default Customerinfo;
