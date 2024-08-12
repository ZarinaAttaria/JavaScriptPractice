const cart = [10, 15, 40, 60, 80];
let total = 0;
let withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});

console.log("Total cost: ", total);
console.log("Cost with Tax: ", withTax);
