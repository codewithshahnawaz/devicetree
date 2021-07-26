import React from "react";

const Customerinfo = () => {
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
          <input type="text" placeholder="Address" />
        </form>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Customerinfo;
