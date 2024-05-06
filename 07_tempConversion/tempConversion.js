const convertToCelsius = function(fan) {
  let exoo = (5/9) * (fan - 32);
  let str = exoo.toFixed(1);
  let cal = Number(str)
  return cal;
};

const convertToFahrenheit = function(cal) {
  let exo = (9/5) * cal + 32;
  let str = exo.toFixed(1);
  let fan = Number(str);
  return fan;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
