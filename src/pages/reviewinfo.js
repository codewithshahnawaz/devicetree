import React from "react";

const Reviewinfo = () => {
  return (
    <div>
      <div className="review form">
        <h1 style={{fontSize:"2rem", margin:0, marginTop:"1rem"}}>Review Information</h1>
        <div className="details">
          <p>
            Device Type: <b>Laptop</b>
          </p>
          <p>
            Issue Type: <b>Hardware</b>
          </p>
          <p>
            Issue occurs in: <b>Speaker</b>
          </p>
          <p>
            More about issue:{" "}
            <b>
              <a href="#download" download>
                Download file
              </a>
            </b>
          </p>
          <p>
            <b style={{textAlign:"center", display:"block", width:"100%"}}>Device Info:</b>{" "}
            <ul>
              {" "}
              <li>
                {" "}
                Brand: <b>Dell</b>
              </li>{" "}
              <li>
                {" "}
                Modal: <b>Latitude E5470</b>
              </li>
              <li>
                {" "}
                Proccesser: <b>Intel Core i7 10th gen x64</b>
              </li>
              <li>
                {" "}
                Graphic Card: <b>2gb 6hrz</b>
              </li>
            </ul>
            <p>
              <b style={{textAlign:"center"}}>Customer Info:</b>
              <ul>
                {" "}
                <li>
                  {" "}
                  Name: <b>Micky morres</b>
                </li>{" "}
                <li>
                  {" "}
                  Phone: <b>+91-****-9898</b>
                </li>
                <li>
                  {" "}
                  E-mail: <b>example@provider.com</b>
                </li>
                <li>
                  {" "}
                  Address:{" "}
                  <address>
                    <b>123, tornoto, vancouver, canada</b>
                  </address>
                </li>
              </ul>
            </p>
          </p>
          <button style={{width:"30rem"}}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Reviewinfo;
