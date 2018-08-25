/* Immutable variables, variables which cannot be re-assigned new content. */

const COUNTRY = 'United States';
/*
COUNTRY = 'Brasil' Error thrown here.
*/
console.log(COUNTRY.temp = 'BRASIL');
console.log(COUNTRY);

/*
We can get immutable feature with Object by using Object.freeze,
but const and Object.freeze are two completely different things.

Const applies to bindings ('variables')

Object.freeze applies on values, and more specifically on object values
and you cannot change its propertieson objects
*/

const USERS = Object.freeze({
  username: 'John',
  email: 'John@example.com'
});

console.log(USERS.username);
console.log(USERS.email);
