(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(Game, ctx) {
    this.game = Game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this;
    setInterval(function(){
      that.game.moveObjects();
      that.game.draw(that.ctx);
    }, 16);
  };

})();
