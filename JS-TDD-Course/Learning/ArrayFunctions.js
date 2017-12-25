/* 6.3 - Array.find() e Array.findIndex() */

const data = [
  {
    name: 'John',
    email: 'john@example.com'
  },
  {
    name: 'Sam',
    email: 'Sam@example.com'
  }
]

const numbers = [5, 7, 2, 0, -1, -7];

console.log('Using find(value): '+numbers.find(x => x < 0));
console.log('Using findIndex: '+numbers.findIndex(x => x < 0));

const John = data.find(john => john.name === 'John')
console.log(John);

/* Using function declaration */
const Ex1_John = numbers.find(function isBigEnough(element) {
  return element <= 2;
})
console.log(Ex1_John);


/* Using Arrow function declaration */
const Ex2_John = numbers.find(
  value => value <= 2
)
console.log(Ex2_John);
