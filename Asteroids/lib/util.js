(function(){
var Asteroids = window.Asteroids = window.Asteroids || {};
Asteroids.prototype.Util = function () {};
Asteroids.Util.prototype.inherits = function (ChildClass, ParentClass) {
  var Surrogate = function(){};
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();
  ChildClass.prototype.constructor = ChildClass;
};

})();
