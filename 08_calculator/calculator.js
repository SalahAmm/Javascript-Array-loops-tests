const add = function(num1 , num2) {
	return num1 + num2;
};

const subtract = function(num1 , num2) {
 return num1 - num2;
  


};

const sum = function(numbers) {
 return numbers.reduce((total , value ) => {
       return total + value}, 0

)}

const multiply = function(numbers) {
  return numbers.reduce((total , value ) => {
    return total * value})

};

const power = function(num1 , num2) {
	return Math.pow(num1 , num2);
};

const factorial = function(n) {
	return n === 0 ?  1 :  n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
