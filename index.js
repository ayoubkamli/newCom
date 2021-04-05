const checkEquation = require("./checkEquation");
let value = process.argv.slice(2);
let equation = value[0];

const main = (eq) => {
  // console.log(eq);
  checkEquation(eq);
};

main(equation);
