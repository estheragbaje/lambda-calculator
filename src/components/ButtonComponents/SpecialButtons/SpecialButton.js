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
  const { specialCharacters } = props;
  return <button className="specialButton">{specialCharacters}</button>;
}

export default SpecialButton;
