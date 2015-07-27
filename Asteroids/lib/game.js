(function(){
  var Asteroid = window.Asteroid = window.Asteroid || {};
  Asteroid.prototype.Util = window.Asteroid.Util = window.Asteroid.Util || {};
  var MovingObject = window.MovingObject = window.MovingObject || {};

  function Game(){
    this.asteroids = [];
  }

  Game.prototype.DIM_X = 500;
  Game.prototype.DIM_Y = 500;
  Game.prototype.NUM_ASTEROIDS = 10;

  Game.prototype.randomPosition = function (){
    return [Math.floor(Math.rand * this.DIM_X), Math.floor(Math.rand * this.DIM_Y)];
  };



  Game.prototype.addAsteroids = function () {
    var that = this;
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var a = new Asteroid({ pos : that.randomPosition});
      that.asteroids.push(a);
    }
  };

})();
