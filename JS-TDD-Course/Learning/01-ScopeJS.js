/* 01 Scope JS - Block-Scoped Variables */

let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());

/* Block-Scoped Functions */
var animal = 'Cat';
console.log(animal);
{
  let animal = 'Dog';
  console.log(animal);
}
console.log(animal);
