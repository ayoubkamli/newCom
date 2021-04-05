const linearEquation = require("./linearEquation");
const quadraticEquation = require("./quadraticEquation");

const rewrit = (e) => {
  let eq = "";
  let i = 0;
  let degree = 0;
  // console.log(e);

  while (i < e.length && e) {
    if (i > 0) {
      if (e[i].number >= 0) {
        eq += ` + ${e[i].number}`;
      } else {
        eq += ` - ${e[i].number * -1}`;
      }
    } else {
      eq += `${e[i].number}`;
    }
    if (e[i].exp == 1) {
      eq += ` * X`;
      if (e[i].exp > degree) {
        degree = e[i].exp;
      }
    } else if (e[i].exp > 1) {
      eq += ` * X^${e[i].exp}`;
      if (e[i].exp > degree) {
        degree = e[i].exp;
      }
    }
    i++;
  }

  if (degree > 0) {
    eq += " = 0";
    console.log("\x1b[36m%s\x1b[0m", eq);
  }
  console.log(`Polynomial degree: ${degree}`);
  if (degree > 2) {
    console.log(
      `The polynomial degree is strictly greater than 2, I can't solve.`
    );
  } else if (degree == 2) {
    //quadraticEquation(e);
    quadraticEquation(e);
  } else if (degree == 1) {
    linearEquation(e);
  } else if (e[0].number == undefined && degree == 0) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `
        0 = 0
        each real number is a solution
      `
    );
  } else {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `
        ${e[0].number} != 0
        There is no soulution`
    );
  }
};

module.exports = rewrit;
