/* Shorthand Properties - Using ES6 */
let firstName = 'John';
let lastName = 'Brubaker';

const person = {
  firstName,
  lastName
}
/* Using ES5 const person = {'firstName': firstName,'lastName': lastName } */

/* New Methods for Strings */
let text = 'My text testing!';

console.log(text.startsWith('My', 2));
console.log(text.endsWith('ing!', 16));
console.log('test\n'.repeat(3));
console.log(text.includes('testin'));
