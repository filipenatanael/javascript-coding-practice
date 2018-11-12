/* Spread Operator */

let heroes = [
  "Batman",
  "Superman",
  "Wonder Woman"
];

function ShowHeroes(h1, h2, h3){
  console.log(`${h1} ${h2} and ${h3}`);
}

ShowHeroes(...heroes);

/* Extended Parameter Handling */
function SUM (x, y = 10, z = 70) {
    return x + y + z;
}
console.log(SUM(1));
//==> 70
