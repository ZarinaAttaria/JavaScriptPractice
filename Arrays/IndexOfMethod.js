const checkValue = (value, arr) => {
  return arr.indexOf(value);
};
let arr = ["Horse", "Dog", "Cat"];
let value = "Dog";
console.log(checkValue(value, arr));
