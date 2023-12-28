function carPassing(cars, speed) {

  const newfunction = {
    time: Date.now(),
    speed: speed,

  };

  cars.push(newfunction);
  return cars;

}

const cars = [
  {
    time: Date.now(),
    speed: 40,
  },

  {
    time: Date.now(),
    speed: 42,
  },

  {
    time: Date.now(),
    speed: 35,
  },
];

const speed = 50;

console.log(carPassing(cars, speed));