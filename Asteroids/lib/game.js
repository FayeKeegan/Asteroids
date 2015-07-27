(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.DIM_X = 500;
  Game.prototype.DIM_Y = 500;
  Game.prototype.NUM_ASTEROIDS = 10;

  Game.prototype.randomPosition = function (){
    return [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)];
  };

  Game.prototype.addAsteroids = function () {
    var that = this;
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var a = new Asteroids.Asteroid({ pos : that.randomPosition()});
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

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach( function(asteroid){
      asteroid.move();
    });
  };

})();
