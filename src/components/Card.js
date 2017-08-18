import React from "react";
import "./Card.css";

const Card = ({ children, ...props }) => (
  <div {...props} className={`card ${props.className}`}>
    {children}
  </div>
);

export default Card;
