(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(game){
    this.game = game;
    this.pos = game.randomPosition();
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.vel = [0,0];
  };

  Ship.COLOR = "blue";
  Ship.RADIUS = 5;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  // Ship.prototype.move = function () {
  //
  // };
  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.fireBullet = function () {
    var b = new Asteroids.Bullet(this.game, this.pos.slice(), [this.vel.slice()[0]*2, this.vel.slice()[1]*2]);
    this.game.addBullet(b);
  };

  Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
    console.log(this.vel);
  };

})();
