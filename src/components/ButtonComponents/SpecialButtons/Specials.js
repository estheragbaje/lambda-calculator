import React from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = props => {
  // STEP 2 - add the imported data to state
  const { onClick } = props;
  return (
    <div className="flex-between">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specials.map(special => {
        return <SpecialButton character={special} onClick={onClick} />;
      })}
    </div>
  );
};

export default Specials;
