/* Primitive Values: [ Stored on the STACK ]
- String
- Number
- Boolean
- Underfined
- Null
- ES6 Symbol

- --------------------------------------------
Primitive Values/ Types [Stored on the HEAP]

- Objects
- Arrays
*/

var name = 'John';
console.log(name); // John

var secondName = name;
console.log(secondName); // John

name = 'Luker';
console.log(name); // Luker
console.log(secondName); // John

var person = {
  age: 25,
  name: 'John',
  hobbies: ['Sports', 'Cooking']
}

var thirdPerson = {
  age: 25,
  name: 'John',
  hobbies: ['Sports', 'Cooking']
}

console.log('Person:', person);
// var secondPerson = person; // This way is referencing the object person
var secondPerson = Object.assign({}, person ); // This way will marger the person into secondPerson

var myHobbies = person.hobbies.slice();

console.log('SecondPerson: ', secondPerson); // Will print exactly like a person object.
person.name = 'Luker';
person.hobbies.push('Reading');
/* if secondPerson is referencing to person, then name will be ´Luker´,
but if its using Object.assign() then the value of name will be ´John´
*/

// console.log('ThirdPerson: ', secondPerson);

console.log('myHobbies: ', myHobbies);
/* With Slice(): The myHobbies will be: ['Sports','Cooking']
WithOut Slice(): The myHobbies will be: ['Sports','Cooking','Reading']
*/
