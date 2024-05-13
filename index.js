const input = require("readline-sync");

let fuelLevel = 0;
let numAstronauts = 0;
let altitude = 0;

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question("Enter the starting fuel level: ");
}
while (numAstronauts <= 0 || numAstronauts > 7 || isNaN(numAstronauts)) {
  numAstronauts = input.question("Enter the number of astronauts: ");
}
while (fuelLevel - 100 * numAstronauts >= 0) {
  altitude += 50;
  fuelLevel -= 100 * numAstronauts;
}
console.log("Final Altitude:", altitude);
console.log("Fuel Level remaining:", fuelLevel);

if (altitude >= 2000)
  console.log(`The shuttle gained an altitude of ${altitude} km.`);
let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
  output += " Orbit achieved!";
} else {
  console.log("Failed to reach orbit.");
}
