const sumAll = function (Fnum, Lnum) {
  // create the sum varible
  let sum = 0;

  // create the loop the sum all the integers between argument

  if ( !isNaN(Fnum) && !isNaN(Lnum)) {
    if (typeof Fnum !== "string" && typeof Lnum !== "string") {
      if (Fnum > Lnum) {
        for (let i = Lnum; i < Fnum + 1; i++) {
          sum += i;
        }
      } else if (Fnum < 0) {
        return "ERROR";
      } else {
        for (let i = Fnum; i < Lnum + 1; i++) {
          sum += i;
        }
      }
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }

  //return the Sum value
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
