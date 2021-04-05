const linearEquation = (e) => {
  let b = e[0].number;
  if (e.length > 1) {
    let a = e[1].number;
    console.log("\x1b[32m%s\x1b[0m", "a * X + b = 0");
    console.log("\x1b[32m%s\x1b[0m", "a * X = -b");
    console.log("\x1b[32m%s\x1b[0m", "X = - b/a");
    console.log(`
    Let change a and b with there values
    `);
    if (a != 0) {
      console.log("\x1b[36m%s\x1b[0m", `X = - (${b} / ${a})`);
      console.log("\x1b[36m%s\x1b[0m", `X =  ${-b / a}`);
    }
  } else if (e.length == 1) {
    console.log("\x1b[36m%s\x1b[0m", `X = (1 / ${e[0].number}) * 0`);
    console.log("\x1b[36m%s\x1b[0m", `X = 0`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", "doesn't have a soulution");
  }
};

module.exports = linearEquation;
