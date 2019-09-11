import React from "react";

// const SpecialButton = (props) => {
// const { specialCharacters } = props;
//   return (
//     <>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     </>
//   );
// };

function SpecialButton(props) {
  const { character, onClick } = props;
  const handleClick = () => onClick(character);
  return (
    <button onClick={handleClick} className="button specialButton">
      {character}
    </button>
  );
}

export default SpecialButton;
