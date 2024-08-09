let nobleGases = ["He", "Ne", "Ar", "Kr", "Xn", "Rn"];

console.log(
  "Ascending Order",
  nobleGases.sort((a, b) => {
    a === b ? 0 : a > b ? 1 : -1;
  })
);

console.log(
  "Descending Order",
  nobleGases.sort((a, b) => {
    a === b ? 0 : a < b ? 1 : -1;
  })
);
