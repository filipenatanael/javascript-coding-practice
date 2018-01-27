/* Arrow Functions and Function expressions */
let books = [
  "Batman",
  "Superman",
  "Wonder Woman",
  "Aquaman"
];

console.log( books.map( b => b.length ) );

console.log( books.map(function(b){ return b.length }) );
