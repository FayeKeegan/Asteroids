Function.prototype.inherits = function (parentClass) {
  function Surrogate() {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
};

//Cat.inherits(Animal)
function Animal(name){
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello. I'm an animal");
};

function Orca(name){
  Animal.call(this, name);
}

Orca.inherits(Animal);

Orca.prototype.swim = function(){
  console.log("SWIMMM");
};
