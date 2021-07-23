import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "8rem",
        padding:"1rem"
      }}
    >
      {/* <h1 style={{ margin: "1rem", fontSize: "1.5rem", fontWeight:"lighter" }}>
        DeviceTree
      </h1>{" "} */}
      <h1 style={{ margin: "1rem", fontSize: "1.8rem", color: "#fa314a" }}>
        DeviceTree
      </h1>
      <div
        style={{
          margin: "1rem",
          fontSize: "1.5rem",
          marginLeft: "1rem",
          height: "5rem",
          width: "5rem",
          textAlign: "center",
          lineHeight: "3rem",
          backgroundColor: "pink",
          borderRadius: "100%",
          color: "#fa314a",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        <p>SH</p>
      </div>
    </div>
  );
};

export default Navbar;
