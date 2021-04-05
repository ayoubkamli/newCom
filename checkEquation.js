const checkElements = require("./checkElement");
const checkEquation = (eq) => {
  eq && (arr = eq.split("="));
  if (arr.length != 2 || arr[0] == "" || arr[1] == "") {
    console.log("Syntax Error: Please enter a valide form.");
  } else {
    checkElements(arr);
  }
};
module.exports = checkEquation;
