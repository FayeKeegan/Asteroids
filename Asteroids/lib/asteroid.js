(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};


  var Asteroid = Asteroids.Asteroid = function(options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.vel = Asteroids.Util.randomVec(Asteroid.VECTOR_LENGTH);
    Asteroids.MovingObject.call(this, options);
    };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.VECTOR_LENGTH = 5;
  Asteroid.COLOR = "#000000";
  Asteroid.RADIUS = 10;

})();
