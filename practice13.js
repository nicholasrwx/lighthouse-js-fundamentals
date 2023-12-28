function judgeVegetable(vegetables) {

  vegetables.sort((a, b) => b.redness - a.redness);

  return vegetables[0].submitter;

}
``

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
