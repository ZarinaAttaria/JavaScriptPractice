const checkValue = (value, arr) => {
  if (arr.includes(value)) {
    return true;
  } else {
    return false;
  }
};
let arr = ["Horse", "Dog", "Cat"];
let value = "Dog";
console.log(checkValue(value, arr));
