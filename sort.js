const rewrit = require("./rewrit");

const sort = (e) => {
  if (e.length == 0) {
    e.push([{ number: 0, exp: 0 }]);
    rewrit(e);
  } else {
    let i = 0;
    let j = 0;
    let n = {};
    while (i < e.length) {
      j = i + 1;
      while (j < e.length) {
        if (e[i].exp > e[j].exp) {
          [e[i], e[j]] = [e[j], e[i]];
        }
        j++;
      }
      i++;
    }
    // console.log(e);
    rewrit(e);
  }
};

module.exports = sort;
