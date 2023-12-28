
function lastIndexOf(Array, Arg) {

  let i = Array.length;

  while (i >= 0) {
    if (Arg === Array[i]) {

      return i;
    }
    i--;
  }

  return -1;
}




console.log(lastIndexOf([5, 5, 2, 3, 4, 2, 6, 7], 2));
