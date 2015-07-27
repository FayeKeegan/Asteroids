(function (){
var Asteroids = window.Asteroids = window.Asteroids || {};

var MovingObject = Asteroids.MovingObject = function(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
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

})();
