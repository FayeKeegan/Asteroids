(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};
  Asteroids.prototype.Util = function () {};
  Asteroids.Util.prototype.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.prototype.randomVec = function(length){
    var x = Math.floor(Math.rand * length);
    var y = Math.sqrt(Math.pow(length, 2)+ Math.pow(x, 2));
    return [x, y];
  };

})();
