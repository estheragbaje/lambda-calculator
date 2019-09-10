import React from "react";

function NumberButton(props) {
  const { digit } = props;
  return <button className="numberButton">{digit}</button>;
}

// <NumberButton digit="1" onClick={...}/>

export default NumberButton;
