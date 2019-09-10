import React from "react";

function NumberButton(props) {
  const { digit, onClick } = props;
  return (
    <button onClick={() => onClick(digit)} className="button numberButton">
      {digit}
    </button>
  );
}

// <NumberButton digit="1" onClick={...}/>

export default NumberButton;
