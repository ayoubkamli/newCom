const checkEquation = require("./checkEquation");
let value = process.argv.slice(2);
let equation = value[0];

const main = (e) => {
  // console.log(eq);
  eq = e.replace(/ /g, "");
  eq = eq.toUpperCase();
  if (eq != "") {
    checkEquation(eq);
  } else {
    console.log("Syntax Error: Please enter a valide form.");
  }
};

main(equation);
