
function calculateRectangleArea(L, W) {

  if (L < 0 || W < 0) {
    return undefined;
  } else {
    let rArea = L * W;
    return rArea;
  }
}

function calculateTriangleArea(B, H) {
  
  if (B < 0 || H < 0) {
    return undefined;
  } else {
    let bArea = B * H / 2;
    return bArea;
  }
}

function calculateCircleArea(R) {
  
  if (R < 0) {
    return undefined;
  } else {
    let cArea = Math.PI * (R * R);
    return cArea;
  }
}

console.log(calculateRectangleArea(-12, 12));
console.log(calculateTriangleArea(12, 12));
console.log(calculateCircleArea(12));


