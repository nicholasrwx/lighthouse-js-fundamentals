function carPassing(cars, speed) {

//created a new object using argument speed for key speed.
  const newfunction = {
    time: Date.now(),
    speed: speed,

  };
//pushes new object to car array passed in argument
//adding a new element to array 
cars.push(newfunction);
//return new array back to caller 
  return cars;

}

//array of objects
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

//variable for speed
const speed = 50;

//passes array of objects and speed to function
console.log(carPassing(cars, speed));
