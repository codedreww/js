// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// problem:
// we work for a company building a smart home thermometer. Our most recent task is this : "Given an array of temperatures of one day, calculate the temperatur eamplitude. Keep in mind that sometimes ther emighjt be a sensor error. "
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] === "string") {
    temperatures.splice(i, 1);
  }
}

const max = Math.max(...temperatures);
const min = Math.min(...temperatures);

console.log(`The temperature amplitude for the day is ${max - min}.`);
*/

// finding bugs
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("Degree celcius")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
console.table(measurement);
*/
