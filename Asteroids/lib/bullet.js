(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(game, pos, vel){
    this.game = game;
    this.ship = game.ship;
    this.vel = vel;
    this.pos = pos;
    this.radius = Bullet.RADIUS;
    this.color = Bullet.COLOR;
  };
  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  Bullet.COLOR = "orange";
  Bullet.RADIUS = 2;
})();
