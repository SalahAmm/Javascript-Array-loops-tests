const removeFromArray = function (array, ...num) {
  let newArray = [];
  array.forEach((item) => {
    if (!num.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
