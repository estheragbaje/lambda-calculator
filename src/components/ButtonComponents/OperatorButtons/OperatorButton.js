import React from "react";

// const OperatorButton = () => {
//   return (
//     <>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     </>
//   );
// };

function OperatorButton(props) {
  const { char, value, onClick } = props;

  const handleClick = () => onClick(value);

  return (
    <button onClick={handleClick} className="button operatorButton">
      {char}
    </button>
  );
}

export default OperatorButton;
