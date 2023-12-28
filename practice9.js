//if opening: check to see if its already open,
//            if not, set it to true and open it.       
//if closing; check to see if its already closed,
//            if not, set it to false and close it.



var umbrella = {
  color: "pink",
  isOpen: false,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  
  close: function () {
    if (umbrella.isOpen === true) {
      
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    
    } else {
      return "The umbrella is already closed!";
    }
  }
 
};


/*
function concat(A, B) {
  let newArray = [];



  for (let i = 0; i < A.length; i++) {
    newArray.push(A[i])
  }
  for (let i = 0; i < B.length; i++) {
    newArray.push(B[i])
  }
  return newArray;
}
*/



