const simplifyEquation = require("./simplifyEquation");

const checkSingleElement = (el, sign) => {
  n = { number: null, exp: null };
  result = [];
  // console.log(el);
  if (el == "X") {
    n.number = 1 * sign;
    n.exp = 1;
  } else if (el == "-X") {
    n.number = -1 * sign;
    n.exp = 1;
  } else if (
    el.match("^\\d+\\.\\d+\\*X\\^\\d+$") ||
    el.match("^\\d+\\*X\\^\\d+$") ||
    el.match("^-\\d+\\.\\d+\\*X\\^\\d+$") ||
    el.match("^-\\d+\\*X\\^\\d+$")
  ) {
    arrEl = el.split("*X^");
    n.number = isNaN(parseFloat(arrEl[0])) ? 1 : parseFloat(arrEl[0]);
    n.number *= sign;
    n.exp = isNaN(parseFloat(arrEl[1])) ? 0 : parseFloat(arrEl[1]);
  } else if (
    el.match("^\\d+\\.\\d+X\\^\\d+$") ||
    el.match("^\\d+X\\^\\d+$") ||
    el.match("^-\\d+\\.\\d+X\\^\\d+$") ||
    el.match("^-\\d+X\\^\\d+$")
  ) {
    arrEl = el.split("X^");
    n.number = isNaN(parseFloat(arrEl[0])) ? 1 : parseFloat(arrEl[0]);
    n.number *= sign;
    n.exp = isNaN(parseFloat(arrEl[1])) ? 0 : parseFloat(arrEl[1]);
  } else if (
    el.match("^\\d+\\.\\d+\\*X$") ||
    el.match("^\\d+\\*X$") ||
    el.match("^-\\d+\\.\\d+\\*X$") ||
    el.match("^-\\d+\\*X$")
  ) {
    n.number = parseFloat(el) * sign;
    n.exp = 1;
  } else if (
    el.match("^\\d+\\.\\d+X$") ||
    el.match("^\\d+X$") ||
    el.match("^-\\d+\\.\\d+X$") ||
    el.match("^-\\d+X$")
  ) {
    n.number = parseFloat(el) * sign;
    n.exp = 1;
  } else if (el.match("^X\\^\\d+$") || el.match("^-X\\^\\d+$")) {
    arrEl = el.split("X^");

    if (el.match("^X\\^\\d+$")) {
      n.number = 1 * sign;
    } else {
      n.number = -1 * sign;
    }

    n.exp = parseFloat(arrEl[1]);
  } else if (
    el.match("^\\d+\\.\\d+$") ||
    el.match("^\\d+$") ||
    el.match("^-\\d+\\.\\d+$") ||
    el.match("^-\\d+$")
  ) {
    n.number = parseFloat(el) * sign;
    if (n.number == -0) {
      n.number = 0;
    }
    n.exp = 0;
  } else {
    console.log(`Suyntax Error at: ${el}`);
    process.exit(1);
  }
  return n;
};

const splitElement = (e, sign) => {
  arr = e.replace(/ /g, "").replace(/-/g, "+-").split("+");
  result = [];
  let element = {};
  arr.map(async (el) => {
    if (el) {
      element = await checkSingleElement(el, sign);
      result.push(element);
    }
  });

  return result;
};

const checkElements = async (arr) => {
  // console.log(arr);

  leftSide = await splitElement(arr[0], 1);
  rightSide = await splitElement(arr[1], -1);
  eq = leftSide.concat(rightSide);
  // console.log(eq);
  simplifyEquation(eq);
};

module.exports = checkElements;