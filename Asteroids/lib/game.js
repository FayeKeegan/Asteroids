(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.DIM_X = 1000;
  Game.prototype.DIM_Y = 1000;
  Game.prototype.NUM_ASTEROIDS = 10;

  Game.prototype.randomPosition = function (){
    return [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)];
  };

  Game.prototype.addAsteroids = function () {
    var that = this;
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var a = new Asteroids.Asteroid({ pos : that.randomPosition(), game : that});
      that.asteroids.push(a);
    }
  };

  Game.prototype.draw = function (ctx) {
    var that = this;
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = "#FF0000";
    that.asteroids.forEach( function(asteroid){
      asteroid.draw(ctx);
    });
  };

  Game.prototype.wrap = function (pos) {
    var x = pos[0];
    var y = pos[1];
    if (x >= 500) {
      x = 0;
    } else if (y >= 500){
      y = 0;
    }
    return [x, y];
  };

  Game.prototype.checkCollisions = function(){
    var that = this;
    //console.log("checking collisions")
    that.asteroids.forEach(function(firstAsteroid){
      that.asteroids.forEach(function(secondAsteroid){
        if (firstAsteroid.isCollidedWith(secondAsteroid)) {
          if (firstAsteroid.pos !== secondAsteroid.pos){
            firstAsteroid.collideWith(secondAsteroid);
          }
        }
      });
    });
  };

  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.moveObjects = function () {
    var that = this;
    that.asteroids.forEach( function(asteroid){
      asteroid.move();
      asteroid.pos = that.wrap(asteroid.pos);
    });
  };

  Game.prototype.remove = function (asteroid) {
    var i = this.asteroids.indexOf(asteroid);
    var left = this.asteroids.slice(0,i);
    var right = this.asteroids.slice(i+1);
    this.asteroids = left.concat(right);
  };



})();
