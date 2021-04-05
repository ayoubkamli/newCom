const sort = require("./sort");

const simplifyEquation = (e) => {
  let i = 0;
  let j = 0;
  while (i < e.length) {
    j = i + 1;
    if (e[i].number == "0") {
      e.splice(i, 1);
    }
    while (j < e.length) {
      if (e[i].exp == e[j].exp) {
        e[i].number = e[i].number + e[j].number;
        e.splice(j, 1);

        j -= 1;
        if (e[i].number == "0") {
          e.splice(i, 1);
          i -= 1;
        }
      }
      j++;
    }
    i++;
  }
  sort(e);
};

module.exports = simplifyEquation;
