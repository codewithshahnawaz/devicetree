import React from "react";
import "./cards.css";
import { useHistory } from "react-router-dom";
const Card = (props) => {
  const history = useHistory();
  return (
    <div className="card" onClick={() => history.push(props.redirect)}>
      {props.icon && (
        <img
          src={props.icon}
          alt={props.define}
          height="10rem"
          width="10rem"
          className="icon"
        />
      )}
      {props.h1 ? (
        <h1 className="define-h1">{props.define}</h1>
      ) : (
        <p className="define">{props.define}</p>
      )}
    </div>
  );
};

export default Card;
