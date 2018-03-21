/* Spread Operator */

let heroes = [
  "Batman",
  "Superman",
  "Wonder Woman",
  "Aquaman"
];

function ShowHeroes(h1, h2, h3){
  console.log(`${h1} ${h2} and ${h3}`);
}

ShowHeroes(...heroes);
