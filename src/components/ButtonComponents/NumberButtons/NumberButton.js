import React from "react";

function NumberButton(props) {
  const { digit, onClick } = props;

  const handleClick = () => onClick(digit);

  return (
    <button onClick={handleClick} className="button numberButton">
      {digit}
    </button>
  );
}

// <NumberButton digit="1" onClick={...}/>

export default NumberButton;
