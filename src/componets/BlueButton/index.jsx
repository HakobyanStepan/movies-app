import React from "react";
import './style.scss';

const BlueButton = ({ onClick, children }) => (
  <button className="blue_button" onClick={onClick}>
    {children}
  </button>
);

export default BlueButton;