const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {

  let Direction = [];
  let numx = 0;
  let numy = 0;

  for (let move of moves) {

    if (move === 'north') {
      numy += 1;
    } else if (move === 'east') {
      numx += 1;
    } else if (move === 'south') {
      numy -= 1;
    } else {
      numx -= 1;
    }

  }
  Direction.push(numx, numy);
  return Direction;

}

console.log(finalPosition(moves));