(function (){
var Asteroids = window.Asteroids = window.Asteroids || {};

var MovingObject = Asteroids.MovingObject = function(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};
// c = new Circle;
// c.render(canvas)
MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  // console.log(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObj) {
  var that = this;
  var xDist = Math.abs(this.pos[0] - otherObj.pos[0]);
  var yDist = Math.abs(this.pos[1] - otherObj.pos[1]);
  var distBetween = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  if (distBetween < (this.radius + otherObj.radius)){
    return true;
  } else {
    return false;
  }
};

MovingObject.prototype.collideWith = function(otherObject){
  this.game.remove(this);
  this.game.remove(otherObject);
};

})();
