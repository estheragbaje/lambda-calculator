import React from "react";

//import any components needed

//Import your array data to from the provided data file

import numbers from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [_numbers, setNumbers] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {_numbers.map(number => {
        return number;
      })}
    </div>
  );
};
