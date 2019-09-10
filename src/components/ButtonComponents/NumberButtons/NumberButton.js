import React from "react";

export const NumberButton = props => {
  const { digit } = props;
  return <button className="numberButton">{digit}</button>;
};

// <NumberButton digit="1"/>
