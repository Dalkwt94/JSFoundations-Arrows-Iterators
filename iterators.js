const logger = function (array) {
  /*for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }*/

  array.forEach((element) => console.log(element));
};

/*************************************/

const toCelsius = function (temperatures) {
  let C = [];
  /*let calc;

  for (let i = 0; i < temperatures.length; i++) {
    calc = (temperatures[i] - 32) * (5 / 9);
    C.push(calc);
  }
  return C;*/

  C = temperatures.map((temp) => (temp - 32) * (5 / 9));

  return C;
};
/*************************************/

const hottestDays = function (temperatures, threshhold) {
  let temp = [];
  temp = temperatures.filter((element) => element > threshhold);
  return temp;
};

/******************************************/
const logHottestDays = function (temperatures, threshhold) {
  /*let C = [];
  let C_threshold = [];
  C = temperatures.map((temp) => (temp - 32) * (5 / 9));

  C_threshold = C.filter((element) => element > threshhold);*/

  const temp = hottestDays(temperatures, threshhold);
  const degrees = toCelsius(temp);
  logger(degrees);

  //return C_threshold;
};

export { logger, toCelsius, hottestDays, logHottestDays };
