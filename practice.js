// why did this work?
// why didn't (capacity >= (type === && type ===))
// work, and both type and capacity having been
// declared and given an array value in the for...of {} 
// work? I got hte right output
// but why didn't it match the criteria?!


//the arrangments both log the same data
//but return differen't data
//one was expecting a different return value
//I had 2 out of 3 conditions met



const stations = [

  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']

];


const chooseStations = function (stations) {

  const name = [];

  for (let station of stations) {

    const capacity = station[1];


    if (capacity >= 20) {

      const type = station[2];

      if (type === 'school' || type === 'community centre') {

        name.push(station[0]);

      }

    }
  }
  return name;
}

console.log(chooseStations(stations));// ['Bright Lights Elementary', 'Moose Mountain Community Centre']
