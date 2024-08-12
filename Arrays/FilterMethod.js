const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];
let filteredPrices = prices.filter(
  (price) => price > 2000 && !Number.isNaN(price)
);

console.log("New Prices: ", filteredPrices);
