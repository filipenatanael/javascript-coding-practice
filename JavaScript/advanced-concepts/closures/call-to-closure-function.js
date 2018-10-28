var Person = function(pName) {
  var name = pName;

  this.getName = function() {
    return name;
  }

  this.setName = function(pNewName) {
    name = pNewName;
  }

}

var person = new Person('John Wick');
console.log(person.getName());

person.setName('Luke Skywalker');
console.log(person.getName());
