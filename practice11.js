
const smartGarbage = function (trash, bins) {


  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  } else {
    return bins;
  }
  return bins;

};

console.log(smartGarbage('waste', { waste: 0, recycling: 0, compost: 0 }));




