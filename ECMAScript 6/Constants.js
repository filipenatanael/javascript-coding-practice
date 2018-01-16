/* Immutable variables, variables which cannot be re-assigned new content. */

const COUNTRY = 'United States';
/*
COUNTRY = 'Brasil' Error thrown here.
*/
console.log(COUNTRY.temp = 'BRASIL');
console.log(COUNTRY);

/*
We can get immutable feature with Object by using Object.freeze
*/

const USERS = Object.freeze({
  username: 'John',
  email: 'John@example.com'
});

console.log(USERS.username);
console.log(USERS.email);
