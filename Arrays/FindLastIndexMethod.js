let animals = [
  { no: 1, track: "Pigs on the Wing (Part One)" },
  { no: 2, track: "Dogs" },
  { no: 3, track: "Pigs (Three Different Ones)" },
  { no: 4, track: "Sheep" },
  { no: 5, track: "Pigs on the Wing (Part Two)" },
];
console.log(animals.findLastIndex((el) => el["track"].includes("Pigs")));
