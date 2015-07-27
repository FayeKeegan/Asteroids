(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function(length){
    var x = Math.floor(Math.random() * length);
    var y = Math.sqrt(Math.pow(length, 2)+ Math.pow(x, 2));
    console.log(x + " " + y);
    return [x, y];
  };

})();
