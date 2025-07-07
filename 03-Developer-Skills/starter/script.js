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

/* problem: Given an array of forecasted maximum temperatures, the thermoteter displays a string with these temperatures.

example: [17, 21, 23] -> "... 17 c in 1 days, 21 c in 2 days, 23 c in 3 days ...".

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
*/

/*
const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} Degree Celcius in ${i + 1} days`;
    if (i !== arr.length - 1) {
      str += `, `;
    }
  }
  str += ` ...`;
  return str;
};

const arr = [17, 21, 23];
console.log(printForecast(arr));
*/

/*
We're building a time tracking application for freelancers. At some point in building, we need a function that receives daily work hours for a certain week and returns:
1. Total hours worked
2. Average daily hours
3. Day with the most hours worked
4. Number of days worked.
5. Whether the week was full time ( 35 hours or more).

array = [7, 5, 8, 6.5, 0, 8.5, 4, 5]
*/

/*
const arr = [7, 5, 8, 6.5, 0, 8.5, 4, 5];

const totalHours = function (arr) {
  let tot = 0;
  for (let i = 0; i < arr.length; i++) {
    tot += arr[i];
  }
  return tot;
};

const avgHours = function (arr) {
  let tot = 0;
  for (let i = 0; i < arr.length; i++) {
    tot += arr[i];
  }
  const avg = tot / arr.length;
  return `${avg} average hours.`;
};

const daysWorked = function (arr) {
  const workedDays = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      workedDays.push(arr[i]);
    }
  }
  return workedDays.length;
};

const fullTime = `${totalHours(arr) >= 35 ? "fulltime" : "Not Fulltime"}`;

console.log(
  totalHours(arr),
  " total hours , ",
  avgHours(arr),
  ", ",
  daysWorked(arr),
  ", ",
  fullTime
);
*/
