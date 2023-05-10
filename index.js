exports.stringLength = (string) => {
  if (!string.length || string.length > 10)
    throw new Error("The string length should be between 1 and 10 included");
  return string.length;
};

exports.reverseString = (string) => {
  return string.split("").reverse().join("");
};

exports.Calculator = class {
  add = (a, b) => a + b;

  substract = (a, b) => a - b;

  divide = (a, b) => a / b;

  multiply = (a, b) => a * b;
};

exports.capitalize = (string) => {
  let str1 = string.toLowerCase();
  const str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
  return str2;
};
