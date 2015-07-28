(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(Game, ctx) {
    this.game = Game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this;
    this.bindKeyHandlers();
    setInterval(function(){
      that.game.step();
      that.game.draw(that.ctx);
    }, 60);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var game = this.game;
    key("up", function() {
      game.ship.power([0, -1]);
    });
    key("down", function() {
      game.ship.power([0, 1]);
    });
    key("left", function() {
      game.ship.power([-1, 0]);
    });
    key("right", function() {
      game.ship.power([1, 0]);
    });
    key("space", function() {
      game.ship.fireBullet();
    })
  };

})();
