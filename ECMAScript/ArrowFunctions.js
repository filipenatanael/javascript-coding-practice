/* Arrow Functions and Function expressions */
let heroes = [
  "Batman",
  "Superman",
  "Wonder Woman",
  "Aquaman"
];

console.log(heroes.map( h => h.length ));
console.log(heroes.map(function(h){ return h.length }));

/* Statement Bodies */
heroes.forEach(hero => {
  console.log(`The best hero is ${hero}`);
});

/* Lexical Scope (this) */
function startGame() {
  this.lives = 0;
  this.addLives = () => {
    this.oneUp = setTimeout(() => {
      //console.log(++this.lives);
    }, 1000);
  }
}

let Pubs = new startGame();
Pubs.addLives();


function f (x, y, ...a) {
    console.log('\n\n');

    console.log(a.length);
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7);
