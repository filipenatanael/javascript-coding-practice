function People(){
  this.name;
  this.age;

  this.sayHello = function(){
    alert("Hello!");
  }

  this.setName = function(name){
    this.name = name;
    alert("My new name is: "+this.name);
  }

}

var person = new People();
person.sayHello();
person.setName("John");
