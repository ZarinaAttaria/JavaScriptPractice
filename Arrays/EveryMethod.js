const compare = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((elem, index) => elem === arr2[index])
  );
};
let a = [1, undefined, 2];
let b = [1, null, 2];
console.log(compare(a, b));
