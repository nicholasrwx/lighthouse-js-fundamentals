

function ageCalculator(name, yearOfBirth, currentYear) {

  let Age = currentYear - yearOfBirth;

  let string = `${name} is ${Age} years old.`;

  return string;

}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));