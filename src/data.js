// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

export const operators = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "="
  }
];

export const specials = ["C", "+/-", "%"];

/**
 * STEPS I FOLLOWED
 * 1.. Exported Numbers, Operators and Specials
 * 2.. Imported them into their individual js files for Numbers, Operators and Specials e.g import { numbers } from "../../../data";
 * 3.. Also made sure I was exporting the necessasry files
 * 4.. Destructured the onClick props e.g
 *    const { digit, onClick } = props;
 * 5.. Created a function handleclick that takes in the callback e.g const handleClick = () => onClick(digit);
 * 6.. Performed a map on all the numbers, operators and special to produce all the buttons to create the components of the calculator
 * 7.. Created the display component and exported it
 * 8.. Imported numbers, operators, specials and display into app.js e.g import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
 * 9.. Styled the buttons usings CSS and added classNames where necessary to make styling easier
 * 10.. In Apps.js Set useState to 0 and passed two arguments{display, SetDisplay}
 * 11.. Created funtions to handle the logic for numbers, operators and special buttons
 * 12.. For Numbers, the output should be equal to the display and if display is 0, it shouldn't display anyother thing, if not, it should display 0
 *      For Operators, if display is 0, no operaor button should show. If "=" is used, it should evaluate mathematically what has been passed into it and bring out the output
 * 13.. For SpecialClick, if C is clicked, it should set display to 0, % should divide by 100 and +- should multiply display by -1
 * 14.. I then rendered all (display, special, numbers, operators).
 * 15.. I had to create a div on special and numbers called special-numbers and then a div called all-buttons containing special-numbers div and operators and styled in css till I achieved the result
 */
